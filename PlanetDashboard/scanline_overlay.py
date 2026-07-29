"""
widgets/scanline_overlay.py

Transparent full-window overlay that paints moving CRT scanlines plus a
subtle vignette. Placed on top of the whole UI stack to sell the
"retro terminal" look without touching the widgets underneath.
"""

from PySide6.QtWidgets import QWidget
from PySide6.QtCore import Qt, QTimer
from PySide6.QtGui import QPainter, QColor, QRadialGradient, QBrush


class ScanlineOverlay(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setAttribute(Qt.WA_TransparentForMouseEvents)
        self.setAttribute(Qt.WA_NoSystemBackground)
        self._offset = 0.0
        self.timer = QTimer(self)
        self.timer.timeout.connect(self._tick)
        self.timer.start(50)

    def _tick(self):
        self._offset = (self._offset + 1) % 4
        self.update()

    def paintEvent(self, event):
        painter = QPainter(self)
        painter.setRenderHint(QPainter.Antialiasing, False)
        w, h = self.width(), self.height()

        # scanlines
        line_color = QColor(0, 0, 0, 40)
        y = -4 + self._offset
        while y < h:
            painter.fillRect(0, int(y), w, 1, line_color)
            y += 4

        # vignette
        grad = QRadialGradient(w / 2, h / 2, max(w, h) * 0.75)
        grad.setColorAt(0.7, QColor(0, 0, 0, 0))
        grad.setColorAt(1.0, QColor(0, 0, 0, 120))
        painter.setBrush(QBrush(grad))
        painter.setPen(Qt.NoPen)
        painter.drawRect(0, 0, w, h)
        painter.end()
