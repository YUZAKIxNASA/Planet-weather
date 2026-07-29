"""
api/weather_api.py

Real-world weather for Earth (used when the selected planet is Earth).
Supports either OpenWeatherMap or WeatherAPI depending on which key the
user has configured in Settings. Falls back to cache/offline gracefully.
"""

import requests
from . import cache

TIMEOUT = 8


def owm_current(api_key: str, city: str = "London"):
    """OpenWeatherMap current weather."""
    if not api_key:
        return cache.load("weather_owm"), False
    try:
        resp = requests.get(
            "https://api.openweathermap.org/data/2.5/weather",
            params={"q": city, "appid": api_key, "units": "metric"},
            timeout=TIMEOUT,
        )
        resp.raise_for_status()
        data = resp.json()
        cache.save("weather_owm", data)
        return data, True
    except Exception:
        return cache.load("weather_owm"), False


def weatherapi_current(api_key: str, city: str = "London"):
    """WeatherAPI.com current weather."""
    if not api_key:
        return cache.load("weather_weatherapi"), False
    try:
        resp = requests.get(
            "https://api.weatherapi.com/v1/current.json",
            params={"key": api_key, "q": city},
            timeout=TIMEOUT,
        )
        resp.raise_for_status()
        data = resp.json()
        cache.save("weather_weatherapi", data)
        return data, True
    except Exception:
        return cache.load("weather_weatherapi"), False


def normalize(owm_data=None, weatherapi_data=None):
    """Return a small common dict: temp_c, condition, wind_kmh, humidity."""
    if owm_data:
        try:
            return {
                "temp_c": owm_data["main"]["temp"],
                "condition": owm_data["weather"][0]["description"].title(),
                "wind_kmh": round(owm_data["wind"]["speed"] * 3.6, 1),
                "humidity": owm_data["main"]["humidity"],
                "city": owm_data.get("name", "Earth"),
            }
        except Exception:
            pass
    if weatherapi_data:
        try:
            cur = weatherapi_data["current"]
            return {
                "temp_c": cur["temp_c"],
                "condition": cur["condition"]["text"],
                "wind_kmh": cur["wind_kph"],
                "humidity": cur["humidity"],
                "city": weatherapi_data.get("location", {}).get("name", "Earth"),
            }
        except Exception:
            pass
    return None
