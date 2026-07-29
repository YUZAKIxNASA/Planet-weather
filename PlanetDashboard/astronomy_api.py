"""
api/astronomy_api.py

Sunrise / sunset / moon phase data. Uses the free sunrise-sunset.org API
(no key required) for sunrise/sunset, and an optional astronomy API key
(e.g. ipgeolocation.io) for moon phase if the user has configured one.
Falls back to a simple locally-computed moon phase approximation when
offline or no key is set, so the UI always has something to show.
"""

import math
from datetime import date, datetime
import requests
from . import cache

TIMEOUT = 8


def sunrise_sunset(lat: float, lng: float):
    """Free, no-key-required sunrise/sunset lookup."""
    try:
        resp = requests.get(
            "https://api.sunrise-sunset.org/json",
            params={"lat": lat, "lng": lng, "formatted": 0},
            timeout=TIMEOUT,
        )
        resp.raise_for_status()
        data = resp.json()["results"]
        cache.save("astro_sun", data)
        return data, True
    except Exception:
        return cache.load("astro_sun"), False


def moon_phase_ipgeolocation(api_key: str, lat: float, lng: float):
    """Moon phase via ipgeolocation.io astronomy endpoint (requires key)."""
    if not api_key:
        return None, False
    try:
        resp = requests.get(
            "https://api.ipgeolocation.io/astronomy",
            params={"apiKey": api_key, "lat": lat, "long": lng},
            timeout=TIMEOUT,
        )
        resp.raise_for_status()
        data = resp.json()
        cache.save("astro_moon", data)
        return data, True
    except Exception:
        return cache.load("astro_moon"), False


def approximate_moon_phase(for_date: date = None):
    """
    Offline fallback: simple synodic-month approximation.
    Returns (phase_name, illumination_fraction 0-1).
    """
    for_date = for_date or date.today()
    known_new_moon = date(2000, 1, 6)
    synodic = 29.53058867
    days = (for_date - known_new_moon).days
    phase_pos = (days % synodic) / synodic  # 0..1

    illumination = (1 - math.cos(2 * math.pi * phase_pos)) / 2
    if phase_pos < 0.03 or phase_pos > 0.97:
        name = "New Moon"
    elif phase_pos < 0.22:
        name = "Waxing Crescent"
    elif phase_pos < 0.28:
        name = "First Quarter"
    elif phase_pos < 0.47:
        name = "Waxing Gibbous"
    elif phase_pos < 0.53:
        name = "Full Moon"
    elif phase_pos < 0.72:
        name = "Waning Gibbous"
    elif phase_pos < 0.78:
        name = "Last Quarter"
    else:
        name = "Waning Crescent"
    return name, round(illumination, 2)
