"""
api/cache.py

Very small JSON file cache used by every API wrapper so the dashboard has
something to show (and knows to say "CACHED / OFFLINE") when a network
call fails or no API key has been configured.
"""

import json
import time
from pathlib import Path

CACHE_DIR = Path(__file__).resolve().parent.parent / "cache"
CACHE_DIR.mkdir(exist_ok=True)


def cache_path(key: str) -> Path:
    safe = "".join(c if c.isalnum() else "_" for c in key)
    return CACHE_DIR / f"{safe}.json"


def save(key: str, data: dict):
    payload = {"ts": time.time(), "data": data}
    try:
        cache_path(key).write_text(json.dumps(payload), encoding="utf-8")
    except Exception:
        pass


def load(key: str, max_age_seconds: float = None):
    p = cache_path(key)
    if not p.exists():
        return None
    try:
        payload = json.loads(p.read_text(encoding="utf-8"))
    except Exception:
        return None
    if max_age_seconds is not None and (time.time() - payload.get("ts", 0)) > max_age_seconds:
        return payload.get("data")  # still return stale data for offline mode
    return payload.get("data")
