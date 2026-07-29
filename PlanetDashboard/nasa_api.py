"""
api/nasa_api.py

Thin wrappers around NASA's open APIs: https://api.nasa.gov
All calls are best-effort: on any failure (no key, no network, rate
limit) they fall back to the local cache and finally to None, so the UI
can show an "OFFLINE / CACHED" state instead of crashing.
"""

import requests
from . import cache

BASE = "https://api.nasa.gov"
TIMEOUT = 8


def _get(url, params, cache_key):
    try:
        resp = requests.get(url, params=params, timeout=TIMEOUT)
        resp.raise_for_status()
        data = resp.json()
        cache.save(cache_key, data)
        return data, True
    except Exception:
        return cache.load(cache_key), False


def apod(api_key: str):
    """Astronomy Picture of the Day."""
    params = {"api_key": api_key or "DEMO_KEY"}
    return _get(f"{BASE}/planetary/apod", params, "nasa_apod")


def neows_feed(api_key: str, start_date: str, end_date: str):
    """Near Earth Object Web Service - asteroid feed."""
    params = {"api_key": api_key or "DEMO_KEY", "start_date": start_date, "end_date": end_date}
    return _get(f"{BASE}/neo/rest/v1/feed", params, "nasa_neows")


def mars_rover_photos(api_key: str, rover: str = "curiosity", sol: int = 1000):
    """Mars Rover Photos."""
    params = {"api_key": api_key or "DEMO_KEY", "sol": sol}
    return _get(f"{BASE}/mars-photos/api/v1/rovers/{rover}/photos", params, f"nasa_rover_{rover}")


def epic_natural(api_key: str):
    """EPIC - Earth Polychromatic Imaging Camera, most recent natural-color images."""
    params = {"api_key": api_key or "DEMO_KEY"}
    return _get(f"{BASE}/EPIC/api/natural", params, "nasa_epic")


def earth_imagery(api_key: str, lat: float, lon: float, date: str = None):
    """Earth Imagery (Landsat) for a lat/lon."""
    params = {"api_key": api_key or "DEMO_KEY", "lat": lat, "lon": lon}
    if date:
        params["date"] = date
    return _get(f"{BASE}/planetary/earth/imagery", params, "nasa_earth_imagery")
