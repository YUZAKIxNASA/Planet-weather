"""
ui/loading_screen.py

Boot-sequence splash screen: types out a short "system check" log, then
fires `done` so main.py can swap in the real MainWindow. Pure cosmetic,
but sets the CRT tone immediately on launch.
"""

from PySide6.QtWidgets import QWidget, QVBoxLayout, QLabel
from PySide6.QtCore import Qt, Signal, QTimer
from PySide6.QtGui import QFont

BOOT_LINES = [
    "INITIALIZING PLANET DASHBOARD OS...",
    "LOADING TERRAIN SHADERS... OK",
    "CALIBRATING ORBIT RINGS... OK",
    "CONNECTING TO NASA / WEATHER / TIME APIs...",
    "MOUNTING LOCAL DATABASE... OK",
    "SYSTEM READY.",
]


class LoadingScreen(QWidget):
    done = Signal()

    def __init__(self, parent=None):
        super().__init__(parent)
        self.setStyleSheet("background-color: #050a08;")
        layout = QVBoxLayout(self)
        layout.setAlignment(Qt.AlignCenter)

        self.title = QLabel("PLANET DASHBOARD")
        self.title.setAlignment(Qt.AlignCenter)
        self.title.setStyleSheet("color: rgb(0,255,140); font-size: 34px; font-weight: bold; font-family: Consolas;")
        layout.addWidget(self.title)

        self.log_label = QLabel("")
        self.log_label.setAlignment(Qt.AlignCenter)
        self.log_label.setStyleSheet("color: rgb(120,220,170); font-size: 13px; font-family: Consolas;")
        layout.addWidget(self.log_label)

        self._lines_shown = []
        self._line_index = 0
        self._timer = QTimer(self)
        self._timer.timeout.connect(self._next_line)
        self._timer.start(420)

    def _next_line(self):
        if self._line_index < len(BOOT_LINES):
            self._lines_shown.append(BOOT_LINES[self._line_index])
            self.log_label.setText("\n".join(self._lines_shown))
            self._line_index += 1
        else:
            self._timer.stop()
            QTimer.singleShot(400, self.done.emit)
