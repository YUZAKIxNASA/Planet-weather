"""
ui/settings_dialog.py

API Settings page. Lets the user paste NASA / Weather / Astronomy API
keys; they're saved (lightly obfuscated) to the local SQLite database via
database.db.Database, and picked up immediately by the API manager.
"""

from PySide6.QtWidgets import (
    QDialog, QVBoxLayout, QFormLayout, QLineEdit, QPushButton, QLabel, QHBoxLayout
)
from PySide6.QtCore import Qt


class SettingsDialog(QDialog):
    def __init__(self, db, parent=None):
        super().__init__(parent)
        self.db = db
        self.setWindowTitle("API Settings")
        self.setMinimumWidth(420)
        self.setStyleSheet(
            "QDialog { background-color: #0a0f0d; }"
            "QLabel { color: #b9f5d3; font-family: Consolas; }"
            "QLineEdit { background-color: #111a16; color: #d8ffe9; "
            "border: 1px solid rgba(0,255,140,120); padding: 6px; font-family: Consolas; }"
            "QPushButton { background-color: rgba(0,255,140,30); color: #b9f5d3; "
            "border: 1px solid rgba(0,255,140,150); padding: 6px 14px; font-family: Consolas; }"
            "QPushButton:hover { background-color: rgba(0,255,140,60); }"
        )

        layout = QVBoxLayout(self)
        header = QLabel("API MANAGER")
        header.setStyleSheet("font-size: 16px; font-weight: bold;")
        layout.addWidget(header)

        note = QLabel(
            "Keys are stored locally on this machine (lightly obfuscated), never sent anywhere\n"
            "except directly to the corresponding API when you use a feature that needs it."
        )
        note.setWordWrap(True)
        note.setStyleSheet("color: rgba(185,245,211,150); font-size: 11px;")
        layout.addWidget(note)

        form = QFormLayout()
        self.nasa_edit = QLineEdit(self.db.get_api_key("nasa"))
        self.weather_edit = QLineEdit(self.db.get_api_key("weather"))
        self.weatherapi_edit = QLineEdit(self.db.get_api_key("weatherapi"))
        self.astro_edit = QLineEdit(self.db.get_api_key("astronomy"))
        for edit in (self.nasa_edit, self.weather_edit, self.weatherapi_edit, self.astro_edit):
            edit.setEchoMode(QLineEdit.Password)

        form.addRow("NASA API Key:", self.nasa_edit)
        form.addRow("OpenWeatherMap Key:", self.weather_edit)
        form.addRow("WeatherAPI.com Key:", self.weatherapi_edit)
        form.addRow("Astronomy (ipgeolocation) Key:", self.astro_edit)
        layout.addLayout(form)

        btn_row = QHBoxLayout()
        save_btn = QPushButton("Save")
        save_btn.clicked.connect(self._save)
        cancel_btn = QPushButton("Cancel")
        cancel_btn.clicked.connect(self.reject)
        btn_row.addStretch(1)
        btn_row.addWidget(cancel_btn)
        btn_row.addWidget(save_btn)
        layout.addLayout(btn_row)

    def _save(self):
        self.db.set_api_key("nasa", self.nasa_edit.text().strip())
        self.db.set_api_key("weather", self.weather_edit.text().strip())
        self.db.set_api_key("weatherapi", self.weatherapi_edit.text().strip())
        self.db.set_api_key("astronomy", self.astro_edit.text().strip())
        self.accept()
