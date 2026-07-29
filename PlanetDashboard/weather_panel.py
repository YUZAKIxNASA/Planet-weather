"""
widgets/weather_panel.py

For Earth: shows real current weather from OpenWeatherMap/WeatherAPI (if
a key is configured) via a background QThread so the UI never blocks.
For every other planet: shows the simulated "planet weather" from static
data. Always has an offline/simulated fallback.
"""

from PySide6.QtWidgets import QWidget, QVBoxLayout, QLabel, QFrame
from PySide6.QtCore import QThread, Signal, QObject

from api import weather_api


class _WeatherFetchWorker(QObject):
    finished = Signal(object, bool)

    def __init__(self, owm_key, weatherapi_key, city):
        super().__init__()
        self.owm_key = owm_key
        self.weatherapi_key = weatherapi_key
        self.city = city

    def run(self):
        owm_data, owm_ok = (None, False)
        wa_data, wa_ok = (None, False)
        if self.owm_key:
            owm_data, owm_ok = weather_api.owm_current(self.owm_key, self.city)
        elif self.weatherapi_key:
            wa_data, wa_ok = weather_api.weatherapi_current(self.weatherapi_key, self.city)
        normalized = weather_api.normalize(owm_data, wa_data)
        self.finished.emit(normalized, owm_ok or wa_ok)


class WeatherPanel(QFrame):
    def __init__(self, accent=(0, 255, 140), parent=None):
        super().__init__(parent)
        self.accent = accent
        self.setObjectName("weatherPanel")

        layout = QVBoxLayout(self)
        layout.setContentsMargins(10, 8, 10, 8)

        self.header = QLabel("WEATHER")
        self.body = QLabel("Awaiting data...")
        self.body.setWordWrap(True)
        layout.addWidget(self.header)
        layout.addWidget(self.body)

        self._thread = None
        self._worker = None
        self._apply_style()

    def _apply_style(self):
        r, g, b = self.accent
        self.setStyleSheet(
            f"#weatherPanel {{ background-color: rgba(255,255,255,8); "
            f"border: 1px solid rgba({r},{g},{b},90); border-radius: 8px; }}"
        )
        self.header.setStyleSheet(
            f"color: rgb({r},{g},{b}); font-weight: bold; font-family: Consolas;"
        )
        self.body.setStyleSheet("color: rgba(230,240,235,220); font-family: Consolas; font-size: 12px;")

    def set_accent(self, rgb):
        self.accent = rgb
        self._apply_style()

    def show_planet_weather(self, planet: dict):
        text = (
            f"Storm: {planet['storm']}\n"
            f"Wind: {planet['wind_kmh']} km/h\n"
            f"Pressure: {planet['pressure_atm']} atm\n"
            f"Temp: {planet['temp_c']} C"
        )
        self.body.setText(text)

    def fetch_earth_weather(self, owm_key, weatherapi_key, city="London"):
        self.body.setText("Fetching live weather...")
        self._thread = QThread(self)
        self._worker = _WeatherFetchWorker(owm_key, weatherapi_key, city)
        self._worker.moveToThread(self._thread)
        self._thread.started.connect(self._worker.run)
        self._worker.finished.connect(self._on_result)
        self._worker.finished.connect(self._thread.quit)
        self._thread.start()

    def _on_result(self, data, ok):
        if data:
            tag = "" if ok else " (cached)"
            self.body.setText(
                f"{data['city']}{tag}: {data['condition']}\n"
                f"Temp: {data['temp_c']} C\n"
                f"Wind: {data['wind_kmh']} km/h  Humidity: {data['humidity']}%"
            )
        else:
            self.body.setText(
                "No live data (no API key set / offline).\n"
                "Add a key in Settings for real Earth weather."
            )
