# Planet Dashboard — Codespaces Setup & Troubleshooting

Notes from getting `PlanetDashboard` running inside a GitHub Codespace.

## 1. Install dependencies

From inside the `PlanetDashboard` folder:

```bash
pip install -r requirements.txt
```

## 2. Install missing system libraries (fixes `libGL.so.1` error)

Codespaces containers are often missing base OpenGL/X libraries that Qt needs:

```bash
sudo apt-get update
sudo apt-get install -y libgl1 libegl1 libxkbcommon0 libdbus-1-3 libxcb-cursor0
```

## 3. Folder structure must be intact

The app expects this layout (not all files loose in one folder):

```
PlanetDashboard/
├── main.py
├── ui/            (main_window.py, loading_screen.py, settings_dialog.py, __init__.py)
├── widgets/       (planet_widget.py, starfield_widget.py, terminal_widget.py, ...)
├── api/           (nasa_api.py, weather_api.py, astronomy_api.py, time_api.py, cache.py, __init__.py)
├── planets/       (planet_data.py, __init__.py)
├── database/      (db.py, __init__.py)
├── themes/        (theme_manager.py, __init__.py)
├── animations/    (typewriter.py, __init__.py)
└── config/        (config.json, settings.json)
```

If a zip/upload flattens everything into one folder, re-sort with:

```bash
mkdir -p ui widgets api planets database themes animations config

mv main_window.py loading_screen.py settings_dialog.py ui/
mv color_selector.py info_cards.py planet_widget.py scanline_overlay.py starfield_widget.py terminal_widget.py weather_panel.py widgets/
mv __init__.py astronomy_api.py cache.py nasa_api.py time_api.py weather_api.py api/
mv planet_data.py planets/
mv db.py database/
mv theme_manager.py themes/
mv typewriter.py animations/
mv config.json settings.json config/

touch ui/__init__.py widgets/__init__.py planets/__init__.py database/__init__.py themes/__init__.py animations/__init__.py
```

## 4. The core issue: Codespaces has no display

Even with everything installed correctly, running:

```bash
python main.py
```

fails with something like:

```
qt.qpa.plugin: Could not load the Qt platform plugin "xcb"
This application failed to start because no Qt platform plugin could be initialized.
```

This is expected — Codespaces is a **headless container** with no screen attached, and this is a **desktop GUI app**, not a web app. It cannot display in a browser tab on its own.

A quick sanity check that the code itself is correct (runs invisibly, no window):

```bash
QT_QPA_PLATFORM=offscreen python main.py
```

If this runs without a traceback, the app logic is fine — the only blocker is the missing display.

## 5. How to actually see and use the dashboard

Pick one:

- **Run it on your own computer instead of Codespaces** (simplest — just works, since a real machine has a real screen):
  ```bash
  pip install -r requirements.txt
  python main.py
  ```

- **Add a virtual desktop to the Codespace** so you can view GUI apps in a noVNC browser tab. Add this to `.devcontainer/devcontainer.json` and rebuild the container:
  ```json
  "features": {
    "ghcr.io/devcontainers/features/desktop-lite:1": {}
  }
  ```
  After rebuilding, a VNC/noVNC port will be forwarded so you can open a virtual desktop in the browser and run `python main.py` there.

## Status

- ✅ Dependencies install correctly
- ✅ System GL libraries installed
- ✅ Folder structure fixed, all imports resolve
- ✅ App runs cleanly under `QT_QPA_PLATFORM=offscreen` (proves the code works)
- ⏳ Still needs a real display (local machine or Codespaces virtual desktop) to actually be seen and used
