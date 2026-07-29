"""
database/db.py

Thin SQLite wrapper. Handles settings, (locally obfuscated) API keys,
recent planet views, search history, and favorites. Not a substitute for
a real secrets manager -- API keys are only lightly obfuscated (XOR +
base64) to avoid storing them in plain text on disk, which is reasonable
for a local single-user desktop app but should not be treated as strong
encryption.
"""

import sqlite3
import base64
import os
import time
from pathlib import Path

DB_PATH = Path(__file__).resolve().parent.parent / "database" / "database.db"
_XOR_KEY = b"planet-dashboard-local-key"


def _obfuscate(text: str) -> str:
    raw = text.encode("utf-8")
    xored = bytes(b ^ _XOR_KEY[i % len(_XOR_KEY)] for i, b in enumerate(raw))
    return base64.b64encode(xored).decode("ascii")


def _deobfuscate(token: str) -> str:
    try:
        xored = base64.b64decode(token.encode("ascii"))
        raw = bytes(b ^ _XOR_KEY[i % len(_XOR_KEY)] for i, b in enumerate(xored))
        return raw.decode("utf-8")
    except Exception:
        return ""


class Database:
    def __init__(self, path=None):
        self.path = str(path or DB_PATH)
        os.makedirs(os.path.dirname(self.path), exist_ok=True)
        self.conn = sqlite3.connect(self.path)
        self.conn.execute("PRAGMA journal_mode=WAL;")
        self._init_schema()

    def _init_schema(self):
        c = self.conn
        c.execute("""CREATE TABLE IF NOT EXISTS settings (
            key TEXT PRIMARY KEY, value TEXT)""")
        c.execute("""CREATE TABLE IF NOT EXISTS api_keys (
            name TEXT PRIMARY KEY, value TEXT)""")
        c.execute("""CREATE TABLE IF NOT EXISTS recent_planets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT, ts REAL)""")
        c.execute("""CREATE TABLE IF NOT EXISTS search_history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            term TEXT, ts REAL)""")
        c.execute("""CREATE TABLE IF NOT EXISTS favorites (
            name TEXT PRIMARY KEY, ts REAL)""")
        c.commit()

    # ---- settings ----
    def set_setting(self, key: str, value: str):
        self.conn.execute(
            "INSERT INTO settings(key, value) VALUES (?, ?) "
            "ON CONFLICT(key) DO UPDATE SET value=excluded.value",
            (key, value),
        )
        self.conn.commit()

    def get_setting(self, key: str, default=None):
        cur = self.conn.execute("SELECT value FROM settings WHERE key=?", (key,))
        row = cur.fetchone()
        return row[0] if row else default

    # ---- api keys ----
    def set_api_key(self, name: str, key_value: str):
        token = _obfuscate(key_value) if key_value else ""
        self.conn.execute(
            "INSERT INTO api_keys(name, value) VALUES (?, ?) "
            "ON CONFLICT(name) DO UPDATE SET value=excluded.value",
            (name, token),
        )
        self.conn.commit()

    def get_api_key(self, name: str) -> str:
        cur = self.conn.execute("SELECT value FROM api_keys WHERE name=?", (name,))
        row = cur.fetchone()
        return _deobfuscate(row[0]) if row and row[0] else ""

    # ---- recent planets ----
    def add_recent_planet(self, name: str):
        self.conn.execute(
            "INSERT INTO recent_planets(name, ts) VALUES (?, ?)", (name, time.time())
        )
        self.conn.commit()

    def get_recent_planets(self, limit=10):
        cur = self.conn.execute(
            "SELECT name, ts FROM recent_planets ORDER BY ts DESC LIMIT ?", (limit,)
        )
        return cur.fetchall()

    # ---- search history ----
    def add_search_term(self, term: str):
        if not term.strip():
            return
        self.conn.execute(
            "INSERT INTO search_history(term, ts) VALUES (?, ?)", (term, time.time())
        )
        self.conn.commit()

    def get_search_history(self, limit=20):
        cur = self.conn.execute(
            "SELECT term, ts FROM search_history ORDER BY ts DESC LIMIT ?", (limit,)
        )
        return cur.fetchall()

    # ---- favorites ----
    def toggle_favorite(self, name: str) -> bool:
        cur = self.conn.execute("SELECT name FROM favorites WHERE name=?", (name,))
        if cur.fetchone():
            self.conn.execute("DELETE FROM favorites WHERE name=?", (name,))
            self.conn.commit()
            return False
        self.conn.execute(
            "INSERT INTO favorites(name, ts) VALUES (?, ?)", (name, time.time())
        )
        self.conn.commit()
        return True

    def is_favorite(self, name: str) -> bool:
        cur = self.conn.execute("SELECT name FROM favorites WHERE name=?", (name,))
        return cur.fetchone() is not None

    def get_favorites(self):
        cur = self.conn.execute("SELECT name FROM favorites ORDER BY ts DESC")
        return [r[0] for r in cur.fetchall()]

    def close(self):
        self.conn.close()
