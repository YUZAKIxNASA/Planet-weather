"""
themes/theme_manager.py

Maps each color-selector dot to an accent color used throughout the UI
(terminal text, glow, borders). The "green" theme is the classic NASA/CRT
default; other dots retint the whole dashboard.
"""

THEMES = {
    "green":  {"accent": (0, 255, 140),  "label": "NASA Green"},
    "ice":    {"accent": (120, 200, 255), "label": "Ice Blue"},
    "cyan":   {"accent": (0, 220, 255),  "label": "Cyan"},
    "amber":  {"accent": (255, 176, 0),  "label": "Amber"},
    "blue":   {"accent": (60, 130, 255), "label": "Deep Blue"},
    "sky":    {"accent": (60, 190, 255), "label": "Sky"},
    "white":  {"accent": (230, 235, 240), "label": "Mono White"},
    "gold":   {"accent": (255, 210, 120), "label": "Solar Gold"},
    "red":    {"accent": (255, 70, 70),   "label": "Alert Red"},
    "silver": {"accent": (210, 210, 215), "label": "Silver"},
    "azure":  {"accent": (70, 140, 255),  "label": "Azure"},
    "violet": {"accent": (170, 140, 255), "label": "Violet"},
}

THEME_ORDER = ["green", "ice", "cyan", "amber", "blue", "sky",
               "white", "gold", "red", "silver", "azure", "violet"]


def get_theme(name: str):
    return THEMES.get(name, THEMES["green"])


def rgb_str(rgb):
    return f"rgb({rgb[0]},{rgb[1]},{rgb[2]})"


def rgba_str(rgb, a):
    return f"rgba({rgb[0]},{rgb[1]},{rgb[2]},{a})"
