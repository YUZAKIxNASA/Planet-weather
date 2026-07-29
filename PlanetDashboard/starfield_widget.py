"""
widgets/starfield_widget.py

Drifting, twinkling star background. Pure QPainter, no GPU deps, runs at
60 FPS via QTimer. Sits behind the planet widget.
"""

import random
from PySide6.QtWidgets import QWidget
from PySide6.QtCore import Qt, QTimer
from PySide6.QtGui import QPainter, QColor, QBrush


class StarfieldWidget(QWidget):
    def __init__(self, star_count=140, parent=None):
        super().__init__(parent)
        self.setAttribute(Qt.WA_TransparentForMouseEvents)
        self.star_count = star_count
        self.stars = []
        self._seeded = False
        self.timer = QTimer(self)
        self.timer.timeout.connect(self._tick)
        self.timer.start(33)  # ~30 FPS is plenty for a background

    def _seed(self):
        w = max(self.width(), 1)
        h = max(self.height(), 1)
        self.stars = []
        for _ in range(self.star_count):
            self.stars.append({
                "x": random.uniform(0, w),
                "y": random.uniform(0, h),
                "r": random.uniform(0.5, 2.2),
                "speed": random.uniform(0.05, 0.4),
                "phase": random.uniform(0, 6.28),
                "twinkle_speed": random.uniform(0.02, 0.08),
            })
        self._seeded = True

    def resizeEvent(self, event):
        self._seed()
        super().resizeEvent(event)

    def _tick(self):
        if not self._seeded:
            self._seed()
        h = max(self.height(), 1)
        for s in self.stars:
            s["y"] += s["speed"]
            if s["y"] > h:
                s["y"] = 0
            s["phase"] += s["twinkle_speed"]
        self.update()

    def paintEvent(self, event):
        painter = QPainter(self)
        painter.setRenderHint(QPainter.Antialiasing)
        painter.fillRect(self.rect(), QColor(4, 8, 14))
        for s in self.stars:
            alpha = int(90 + 130 * (0.5 + 0.5 * _fast_sin(s["phase"])))
            painter.setBrush(QBrush(QColor(200, 220, 255, alpha)))
            painter.setPen(Qt.NoPen)
            painter.drawEllipse(s["x"], s["y"], s["r"], s["r"])
        painter.end()


def _fast_sin(x):
    import math
    return math.sin(x)
