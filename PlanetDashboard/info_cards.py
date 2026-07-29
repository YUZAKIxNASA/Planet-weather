"""
widgets/info_cards.py

Small glassmorphism-style stat cards (gravity, radius, moons, etc.) laid
out in a responsive grid. update_data() refreshes all cards for the
currently selected planet.
"""

from PySide6.QtWidgets import QWidget, QGridLayout, QLabel, QVBoxLayout, QFrame


class InfoCard(QFrame):
    def __init__(self, title, accent=(0, 255, 140), parent=None):
        super().__init__(parent)
        self.accent = accent
        self.setObjectName("infoCard")
        layout = QVBoxLayout(self)
        layout.setContentsMargins(10, 8, 10, 8)
        layout.setSpacing(2)

        self.title_label = QLabel(title.upper())
        self.title_label.setStyleSheet("color: rgba(255,255,255,140); font-size: 10px; font-family: Consolas;")
        self.value_label = QLabel("--")
        self.value_label.setWordWrap(True)
        self.value_label.setStyleSheet(self._value_style())

        layout.addWidget(self.title_label)
        layout.addWidget(self.value_label)
        self._apply_frame_style()

    def _value_style(self):
        r, g, b = self.accent
        return f"color: rgb({r},{g},{b}); font-size: 15px; font-weight: bold; font-family: Consolas;"

    def _apply_frame_style(self):
        r, g, b = self.accent
        self.setStyleSheet(
            f"#infoCard {{ background-color: rgba(255,255,255,10); "
            f"border: 1px solid rgba({r},{g},{b},90); border-radius: 8px; }}"
        )

    def set_value(self, text):
        self.value_label.setText(str(text))

    def set_accent(self, rgb):
        self.accent = rgb
        self.value_label.setStyleSheet(self._value_style())
        self._apply_frame_style()


class InfoCardGrid(QWidget):
    def __init__(self, accent=(0, 255, 140), parent=None):
        super().__init__(parent)
        self.accent = accent
        grid = QGridLayout(self)
        grid.setSpacing(8)

        fields = ["Gravity", "Radius", "Moons", "Orbit Period", "Day Length", "Atmosphere"]
        self.cards = {}
        for i, field in enumerate(fields):
            card = InfoCard(field, accent=accent)
            self.cards[field] = card
            grid.addWidget(card, i // 3, i % 3)

    def update_data(self, planet: dict):
        self.cards["Gravity"].set_value(f"{planet['gravity_g']} g")
        self.cards["Radius"].set_value(f"{planet['radius_km']:,} km")
        self.cards["Moons"].set_value(planet["moons"])
        self.cards["Orbit Period"].set_value(f"{planet['orbit_days']:,} days")
        self.cards["Day Length"].set_value(f"{planet['day_hours']:,} h")
        self.cards["Atmosphere"].set_value(planet["atmosphere"])

    def set_accent(self, rgb):
        self.accent = rgb
        for card in self.cards.values():
            card.set_accent(rgb)
