"""
widgets/color_selector.py

Row of colored dot buttons (matching the reference screenshot). Clicking
a dot emits themeChosen(name) so the main window can retint the UI.
"""

from PySide6.QtWidgets import QWidget, QHBoxLayout, QPushButton, QLabel
from PySide6.QtCore import Signal, Qt
from themes.theme_manager import THEME_ORDER, get_theme, rgb_str


class ColorSelector(QWidget):
    themeChosen = Signal(str)

    def __init__(self, parent=None):
        super().__init__(parent)
        self.buttons = {}
        self.selected = "green"

        outer = QHBoxLayout(self)
        outer.setContentsMargins(0, 0, 0, 0)
        outer.setSpacing(6)

        label = QLabel("SELECT")
        label.setStyleSheet("color: rgb(180,230,200); font-family: Consolas; font-weight: bold;")
        outer.addWidget(label)

        for name in THEME_ORDER:
            theme = get_theme(name)
            btn = QPushButton()
            btn.setFixedSize(22, 22)
            btn.setCursor(Qt.PointingHandCursor)
            btn.setToolTip(theme["label"])
            btn.clicked.connect(lambda _=False, n=name: self._select(n))
            self.buttons[name] = btn
            outer.addWidget(btn)
        outer.addStretch(1)
        self._refresh_styles()

    def _select(self, name):
        self.selected = name
        self._refresh_styles()
        self.themeChosen.emit(name)

    def _refresh_styles(self):
        for name, btn in self.buttons.items():
            theme = get_theme(name)
            color = rgb_str(theme["accent"])
            border = "3px solid white" if name == self.selected else "1px solid rgba(255,255,255,60)"
            btn.setStyleSheet(
                f"QPushButton {{ background-color: {color}; border-radius: 11px; "
                f"border: {border}; }}"
            )
