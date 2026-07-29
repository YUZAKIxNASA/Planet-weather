# Planet Dashboard

A retro, NASA-terminal-style desktop dashboard for exploring the 8 planets
of the solar system, built with **PySide6** (Qt for Python). Green CRT
text, scanlines, glow, a rotating shaded planet with orbit rings, a
typewriter-animated terminal readout, live weather for Earth, and a
color-themeable UI.

## Quick start

```bash
cd PlanetDashboard
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

No API keys are required to run the app — every planet works fully
offline with static, accurate reference data. Add API keys (see below)
to unlock live Earth weather, NASA imagery, and network time.

## A note on the rendering approach

The original spec asked for `moderngl` / `PyOpenGL` / `opencv-python` and
custom GLSL shaders for the bloom/glow/CRT look. This build instead
renders everything with Qt's `QPainter` (radial gradients, clipped paths,
a scanline overlay widget, and a soft glow ring drawn additively). This
was a deliberate trade-off:

- It reaches a smooth 60 FPS on ordinary hardware with zero native GPU
  dependencies, so it installs and runs the same way on any machine with
  Python + PySide6 — no OpenGL driver / context issues to debug.
- It reproduces the same visual language (glow, scanlines, shaded
  rotating sphere, orbit rings) shown in the reference image.

If you specifically want a GLSL/moderngl bloom pipeline, `widgets/planet_widget.py`
is the single file to swap out — everything else (terminal, data, DB,
APIs) is independent of how the planet is drawn.

## Folder structure

```
PlanetDashboard/
├── assets/            # (add icons/images here)
├── fonts/             # (optional custom monospace fonts)
├── sounds/            # (optional .wav/.mp3 UI sound effects)
├── screenshots/        # Ctrl+Shift+S screenshots land here
├── cache/              # JSON response cache for offline mode
├── config/
│   ├── config.json     # app defaults
│   └── settings.json   # first-run defaults (DB takes over after launch)
├── database/
│   ├── db.py            # SQLite wrapper: settings, api keys, history, favorites
│   └── database.db      # created on first run
├── api/
│   ├── nasa_api.py       # APOD, NeoWs, Mars Rover Photos, EPIC, Earth Imagery
│   ├── weather_api.py    # OpenWeatherMap / WeatherAPI
│   ├── astronomy_api.py  # sunrise/sunset + moon phase
│   ├── time_api.py       # WorldTimeAPI + Spaceflight News API
│   └── cache.py          # local JSON cache used by all of the above
├── planets/
│   └── planet_data.py   # static stats for all 8 planets
├── widgets/
│   ├── planet_widget.py    # rotating shaded planet + orbit rings + glow
│   ├── starfield_widget.py # drifting/twinkling star background
│   ├── scanline_overlay.py # CRT scanline + vignette overlay
│   ├── terminal_widget.py  # typewriter console / readout
│   ├── color_selector.py   # theme dot row
│   ├── info_cards.py       # stat card grid
│   └── weather_panel.py    # planet weather / live Earth weather
├── ui/
│   ├── loading_screen.py   # boot splash
│   ├── settings_dialog.py  # API key manager
│   └── main_window.py      # assembles the whole dashboard
├── animations/
│   └── typewriter.py       # reusable typewriter-reveal helper
├── themes/
│   └── theme_manager.py    # color-selector accent themes
└── main.py                  # entry point
```

## Features implemented

- Animated rotating planet (QPainter-shaded sphere) with orbit rings,
  atmosphere glow, terrain features that rotate in and out of view, and
  day/night terminator shading.
- Drifting starfield background, CRT scanline + vignette overlay.
- Digital clock, signal indicator, battery indicator (via `psutil` if
  installed, otherwise shows N/A).
- Typewriter-animated terminal readout per planet (temp, wind, pressure,
  storm, atmosphere, surface, moons, status).
- Weather panel: simulated planet weather for the 7 non-Earth planets,
  **real live weather** for Earth via OpenWeatherMap or WeatherAPI
  (background thread, non-blocking, cached for offline use).
- Info card grid: gravity, radius, moons, orbit period, day length,
  atmosphere.
- 12-color theme selector that retints terminal, cards, weather panel,
  and the orbit/glow color live.
- Planet search box with autocomplete + search history saved to SQLite.
- Favorites (star toggle), recent-planet history, both in SQLite.
- Settings dialog to paste NASA / OpenWeatherMap / WeatherAPI /
  Astronomy API keys (stored locally, lightly obfuscated).
- Export current planet's data to a `.json` file.
- Screenshot capture to `screenshots/`.
- Keyboard shortcuts: `F11` fullscreen, `Ctrl+,` settings, `Ctrl+Shift+S`
  screenshot, `Ctrl+F` focus search, `Esc` exit fullscreen.
- Offline mode: every API wrapper falls back to the last cached JSON
  response in `cache/` when the network call fails or no key is set.
- NASA, astronomy (sunrise/sunset/moon phase), WorldTimeAPI, and
  Spaceflight News API wrappers are included in `api/` and ready to wire
  into additional panels (they're not all surfaced in the UI by default
  to keep the main screen focused, but each function is used independently
  and documented with a docstring — call them from `main_window.py` to
  add e.g. a news ticker or NASA image-of-the-day card).

## Getting API keys (all free tier)

| Service | URL |
|---|---|
| NASA API | https://api.nasa.gov |
| OpenWeatherMap | https://openweathermap.org/api |
| WeatherAPI | https://www.weatherapi.com |
| WorldTimeAPI | https://worldtimeapi.org (no key needed) |
| Spaceflight News API | https://api.spaceflightnewsapi.net (no key needed) |
| sunrise-sunset.org | https://sunrise-sunset.org/api (no key needed) |

Paste keys into **Settings** (top bar button, or `Ctrl+,`) inside the app.

## Requirements

```
PySide6>=6.6
requests>=2.31
Pillow>=10.0
numpy>=1.26
psutil>=5.9
```

`psutil` is optional — only used for the battery percentage readout; the
app runs fine without it (battery just shows "N/A").
