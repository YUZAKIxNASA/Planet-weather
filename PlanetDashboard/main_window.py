"""
ui/main_window.py

Assembles the full Planet Dashboard: top status bar (clock, battery,
signal, search, settings/fullscreen/screenshot), a left "viewport" with
the starfield + rotating planet + name/status overlay, and a right
column with the terminal readout, weather panel, info card grid, and the
color selector row. A transparent ScanlineOverlay sits above everything.
"""

import json
import os
from datetime import datetime

from PySide6.QtWidgets import (
    QWidget, QVBoxLayout, QHBoxLayout, QStackedLayout, QLabel, QLineEdit,
    QPushButton, QMainWindow, QMessageBox, QFileDialog, QCompleter
)
from PySide6.QtCore import Qt, QTimer, QDateTime
from PySide6.QtGui import QFont, QKeySequence, QShortcut

from widgets.starfield_widget import StarfieldWidget
from widgets.planet_widget import PlanetWidget
from widgets.terminal_widget import TerminalWidget
from widgets.color_selector import ColorSelector
from widgets.info_cards import InfoCardGrid
from widgets.weather_panel import WeatherPanel
from widgets.scanline_overlay import ScanlineOverlay
from ui.settings_dialog import SettingsDialog
from planets.planet_data import PLANETS, PLANET_ORDER, get_planet
from themes.theme_manager import get_theme
from database.db import Database

SCREENSHOTS_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "screenshots")


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Planet Dashboard")
        self.resize(1180, 760)
        self.db = Database()
        self.current_planet_name = self.db.get_setting("last_planet", "Mercury")
        if self.current_planet_name not in PLANETS:
            self.current_planet_name = "Mercury"
        self.accent = get_theme(self.db.get_setting("theme", "green"))["accent"]

        central = QWidget()
        self.setCentralWidget(central)
        root = QVBoxLayout(central)
        root.setContentsMargins(14, 10, 14, 10)
        root.setSpacing(10)

        root.addLayout(self._build_top_bar())

        content = QHBoxLayout()
        content.setSpacing(14)
        content.addWidget(self._build_viewport(), stretch=5)
        content.addLayout(self._build_side_panel(), stretch=4)
        root.addLayout(content, stretch=1)

        root.addWidget(self._build_color_row())

        self._apply_window_style()
        self._build_shortcuts()

        # scanline overlay sits above `central`
        self.overlay = ScanlineOverlay(central)
        self.overlay.setGeometry(central.rect())
        self.overlay.raise_()

        self._clock_timer = QTimer(self)
        self._clock_timer.timeout.connect(self._update_clock)
        self._clock_timer.start(1000)
        self._update_clock()

        self.select_planet(self.current_planet_name, record=False)

    # ---------------------------------------------------------- top bar
    def _build_top_bar(self):
        bar = QHBoxLayout()

        self.clock_label = QLabel("--:--:--")
        self.clock_label.setStyleSheet("color: rgb(0,255,140); font-family: Consolas; font-size: 16px;")
        bar.addWidget(self.clock_label)

        self.signal_label = QLabel("SIGNAL: ▂▄▆█")
        self.signal_label.setStyleSheet("color: rgb(0,255,140); font-family: Consolas;")
        bar.addWidget(self.signal_label)

        self.battery_label = QLabel("BATTERY: 100%")
        self.battery_label.setStyleSheet("color: rgb(0,255,140); font-family: Consolas;")
        bar.addWidget(self.battery_label)
        self._update_battery()

        bar.addStretch(1)

        self.search_box = QLineEdit()
        self.search_box.setPlaceholderText("Search planets...")
        self.search_box.setFixedWidth(220)
        self.search_box.returnPressed.connect(self._on_search)
        completer = QCompleter(PLANET_ORDER)
        completer.setCaseSensitivity(Qt.CaseInsensitive)
        self.search_box.setCompleter(completer)
        bar.addWidget(self.search_box)

        self.fav_btn = QPushButton("☆")
        self.fav_btn.setFixedWidth(34)
        self.fav_btn.clicked.connect(self._toggle_favorite)
        bar.addWidget(self.fav_btn)

        export_btn = QPushButton("Export")
        export_btn.clicked.connect(self._export_data)
        bar.addWidget(export_btn)

        screenshot_btn = QPushButton("Screenshot")
        screenshot_btn.clicked.connect(self._take_screenshot)
        bar.addWidget(screenshot_btn)

        settings_btn = QPushButton("Settings")
        settings_btn.clicked.connect(self._open_settings)
        bar.addWidget(settings_btn)

        fullscreen_btn = QPushButton("Fullscreen")
        fullscreen_btn.clicked.connect(self._toggle_fullscreen)
        bar.addWidget(fullscreen_btn)

        for btn in (self.fav_btn, export_btn, screenshot_btn, settings_btn, fullscreen_btn):
            btn.setCursor(Qt.PointingHandCursor)

        return bar

    # ---------------------------------------------------------- viewport
    def _build_viewport(self):
        container = QWidget()
        stack_layout = QStackedLayout(container)
        try:
            stack_layout.setStackingMode(QStackedLayout.StackingMode.StackAll)
        except AttributeError:
            stack_layout.setStackingMode(QStackedLayout.StackAll)

        self.starfield = StarfieldWidget()
        self.planet_widget = PlanetWidget()

        overlay_widget = QWidget()
        overlay_widget.setAttribute(Qt.WA_TranslucentBackground)
        overlay_layout = QVBoxLayout(overlay_widget)
        overlay_layout.setContentsMargins(16, 12, 16, 12)

        self.header_label = QLabel("PLANET WEATHER")
        self.header_label.setAlignment(Qt.AlignHCenter)
        self.header_label.setStyleSheet("color: rgb(0,255,140); font-family: Consolas; font-size: 16px; font-weight: bold;")
        self.name_label = QLabel("MERCURY")
        self.name_label.setAlignment(Qt.AlignHCenter)
        self.name_label.setStyleSheet("color: white; font-family: Consolas; font-size: 26px; font-weight: bold;")

        overlay_layout.addWidget(self.header_label)
        overlay_layout.addWidget(self.name_label)
        overlay_layout.addStretch(1)

        self.status_label = QLabel("STATUS: READY")
        self.status_label.setAlignment(Qt.AlignHCenter)
        self.status_label.setStyleSheet("color: rgb(0,255,140); font-family: Consolas; font-size: 13px;")
        overlay_layout.addWidget(self.status_label)

        stack_layout.addWidget(self.starfield)
        stack_layout.addWidget(self.planet_widget)
        stack_layout.addWidget(overlay_widget)
        return container

    # ---------------------------------------------------------- side panel
    def _build_side_panel(self):
        col = QVBoxLayout()
        col.setSpacing(10)

        self.terminal = TerminalWidget(accent=self.accent)
        col.addWidget(self.terminal, stretch=3)

        self.weather_panel = WeatherPanel(accent=self.accent)
        col.addWidget(self.weather_panel)

        self.info_grid = InfoCardGrid(accent=self.accent)
        col.addWidget(self.info_grid)

        self.description_label = QLabel("")
        self.description_label.setWordWrap(True)
        self.description_label.setStyleSheet("color: rgba(220,235,225,200); font-family: Consolas; font-size: 12px;")
        col.addWidget(self.description_label)

        return col

    def _build_color_row(self):
        self.color_selector = ColorSelector()
        self.color_selector.selected = self.db.get_setting("theme", "green")
        self.color_selector.themeChosen.connect(self._on_theme_chosen)
        return self.color_selector

    # ---------------------------------------------------------- behavior
    def _apply_window_style(self):
        self.setStyleSheet(
            "QMainWindow { background-color: #05100c; }"
            "QPushButton { background-color: rgba(0,255,140,25); color: #b9f5d3; "
            "border: 1px solid rgba(0,255,140,140); padding: 5px 10px; font-family: Consolas; }"
            "QPushButton:hover { background-color: rgba(0,255,140,55); }"
            "QLineEdit { background-color: rgba(255,255,255,15); color: #d8ffe9; "
            "border: 1px solid rgba(0,255,140,120); padding: 4px 8px; font-family: Consolas; }"
        )

    def _build_shortcuts(self):
        QShortcut(QKeySequence("F11"), self).activated.connect(self._toggle_fullscreen)
        QShortcut(QKeySequence("Ctrl+,"), self).activated.connect(self._open_settings)
        QShortcut(QKeySequence("Ctrl+Shift+S"), self).activated.connect(self._take_screenshot)
        QShortcut(QKeySequence("Ctrl+F"), self).activated.connect(lambda: self.search_box.setFocus())
        QShortcut(QKeySequence("Esc"), self).activated.connect(self._exit_fullscreen)

    def resizeEvent(self, event):
        super().resizeEvent(event)
        if hasattr(self, "overlay"):
            self.overlay.setGeometry(self.centralWidget().rect())

    def _update_clock(self):
        now = QDateTime.currentDateTime()
        self.clock_label.setText(now.toString("hh:mm:ss  ddd d MMM"))

    def _update_battery(self):
        try:
            import psutil
            batt = psutil.sensors_battery()
            if batt:
                self.battery_label.setText(f"BATTERY: {int(batt.percent)}%")
                return
        except Exception:
            pass
        self.battery_label.setText("BATTERY: N/A")

    def select_planet(self, name: str, record=True):
        if name not in PLANETS:
            return
        self.current_planet_name = name
        planet = get_planet(name)

        self.name_label.setText(name.upper())
        self.status_label.setText("STATUS: READY")
        self.planet_widget.set_planet_colors(planet["color"], self.accent)
        self.info_grid.update_data(planet)
        self.description_label.setText(planet["description"])

        self.terminal.clear()
        self.terminal.queue_lines([
            f"> TEMP: {planet['temp_c']} C",
            f"> WIND: {planet['wind_kmh']} km/h",
            f"> PRESS: {planet['pressure_atm']} atm",
            f"> STORM: {planet['storm']}",
            f"> ATM: {planet['atmosphere']}",
            f"> SURF: {planet['surface']}",
            f"> MOONS: {planet['moons']}",
            "> STATUS: READY",
        ])

        if name == "Earth":
            owm_key = self.db.get_api_key("weather")
            weatherapi_key = self.db.get_api_key("weatherapi")
            self.weather_panel.fetch_earth_weather(owm_key, weatherapi_key, city="London")
        else:
            self.weather_panel.show_planet_weather(planet)

        self.fav_btn.setText("★" if self.db.is_favorite(name) else "☆")

        if record:
            self.db.add_recent_planet(name)
        self.db.set_setting("last_planet", name)

    def _on_search(self):
        term = self.search_box.text().strip()
        if not term:
            return
        self.db.add_search_term(term)
        match = next((p for p in PLANET_ORDER if p.lower() == term.lower()), None)
        if not match:
            match = next((p for p in PLANET_ORDER if term.lower() in p.lower()), None)
        if match:
            self.select_planet(match)
        else:
            QMessageBox.information(self, "Not found", f"No planet matching '{term}'.")

    def _on_theme_chosen(self, theme_name):
        self.accent = get_theme(theme_name)["accent"]
        self.db.set_setting("theme", theme_name)
        self.terminal.set_accent(self.accent)
        self.info_grid.set_accent(self.accent)
        self.weather_panel.set_accent(self.accent)
        self.planet_widget.set_planet_colors(get_planet(self.current_planet_name)["color"], self.accent)

    def _toggle_favorite(self):
        is_fav = self.db.toggle_favorite(self.current_planet_name)
        self.fav_btn.setText("★" if is_fav else "☆")

    def _export_data(self):
        planet = get_planet(self.current_planet_name)
        path, _ = QFileDialog.getSaveFileName(
            self, "Export planet data",
            f"{self.current_planet_name}.json", "JSON Files (*.json)"
        )
        if path:
            with open(path, "w", encoding="utf-8") as f:
                json.dump({self.current_planet_name: planet}, f, indent=2)

    def _take_screenshot(self):
        os.makedirs(SCREENSHOTS_DIR, exist_ok=True)
        filename = f"screenshot_{datetime.now().strftime('%Y%m%d_%H%M%S')}.png"
        path = os.path.join(SCREENSHOTS_DIR, filename)
        pixmap = self.grab()
        pixmap.save(path)
        self.status_label.setText(f"STATUS: SAVED {filename}")

    def _open_settings(self):
        dialog = SettingsDialog(self.db, self)
        if dialog.exec():
            if self.current_planet_name == "Earth":
                owm_key = self.db.get_api_key("weather")
                weatherapi_key = self.db.get_api_key("weatherapi")
                self.weather_panel.fetch_earth_weather(owm_key, weatherapi_key, city="London")

    def _toggle_fullscreen(self):
        if self.isFullScreen():
            self.showNormal()
        else:
            self.showFullScreen()

    def _exit_fullscreen(self):
        if self.isFullScreen():
            self.showNormal()

    def closeEvent(self, event):
        self.db.close()
        super().closeEvent(event)
