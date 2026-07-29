"""
api/time_api.py

WorldTimeAPI wrapper for live time-by-timezone, plus the Spaceflight News
API wrapper. Both are free / keyless. Local system time is always used
as the primary clock source (it's instant and always correct); these are
only consulted when the user explicitly wants "network time" or news.
"""

import requests
from . import cache

TIMEOUT = 8


def world_time(timezone: str = "Etc/UTC"):
    try:
        resp = requests.get(
            f"https://worldtimeapi.org/api/timezone/{timezone}", timeout=TIMEOUT
        )
        resp.raise_for_status()
        data = resp.json()
        cache.save("world_time", data)
        return data, True
    except Exception:
        return cache.load("world_time"), False


def spaceflight_news(limit: int = 8):
    try:
        resp = requests.get(
            "https://api.spaceflightnewsapi.net/v4/articles/",
            params={"limit": limit},
            timeout=TIMEOUT,
        )
        resp.raise_for_status()
        data = resp.json()
        cache.save("spaceflight_news", data)
        return data, True
    except Exception:
        return cache.load("spaceflight_news"), False
