"""
widgets/planet_widget.py

Renders a rotating, shaded, glowing planet with orbit rings using
QPainter. This gives the "3D rotating planet with atmosphere and orbit"
look from the spec without depending on a native OpenGL/moderngl context,
which keeps the app portable while still running smoothly at 60 FPS.

The illusion of 3D rotation comes from:
  - a radial gradient sphere (light source fixed, top-left)
  - a set of longitude "terrain" ellipses that slide horizontally and
    squash near the limb, simulating rotation around a vertical axis
  - a soft atmosphere glow ring blended additively at the edge
"""

import math
import random
from PySide6.QtWidgets import QWidget
from PySide6.QtCore import Qt, QTimer, QRectF, QPointF
from PySide6.QtGui import (
    QPainter, QColor, QRadialGradient, QPen, QBrush, QPainterPath
)


class PlanetWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.base_color = (150, 150, 160)
        self.ring_color = (0, 255, 140)
        self.rotation = 0.0
        self.rotation_speed = 0.35  # degrees per tick
        self.spin_paused = False
        self._terrain_seed = 0
        self._terrain_features = []
        self._gen_terrain()

        self.timer = QTimer(self)
        self.timer.timeout.connect(self._tick)
        self.timer.start(16)  # ~60 FPS

    def set_planet_colors(self, base_color, ring_color):
        self.base_color = base_color
        self.ring_color = ring_color
        self._gen_terrain()
        self.update()

    def _gen_terrain(self):
        rng = random.Random(sum(self.base_color))
        self._terrain_features = []
        for _ in range(9):
            self._terrain_features.append({
                "lon": rng.uniform(0, 360),
                "lat": rng.uniform(-60, 60),
                "size": rng.uniform(0.06, 0.16),
                "shade": rng.uniform(-40, 30),
            })

    def _tick(self):
        if not self.spin_paused:
            self.rotation = (self.rotation + self.rotation_speed) % 360
        self.update()

    def paintEvent(self, event):
        painter = QPainter(self)
        painter.setRenderHint(QPainter.Antialiasing)

        w, h = self.width(), self.height()
        cx, cy = w / 2, h / 2
        radius = min(w, h) * 0.30

        self._draw_orbits(painter, cx, cy, radius)
        self._draw_atmosphere_glow(painter, cx, cy, radius)
        self._draw_sphere(painter, cx, cy, radius)
        self._draw_terrain(painter, cx, cy, radius)
        self._draw_terminator_shading(painter, cx, cy, radius)
        painter.end()

    def _draw_orbits(self, painter, cx, cy, radius):
        painter.save()
        pen = QPen(QColor(*self.ring_color, 90))
        pen.setWidthF(1.2)
        painter.setPen(pen)
        painter.setBrush(Qt.NoBrush)
        for i, scale in enumerate((1.9, 2.6)):
            rw = radius * scale
            rh = radius * scale * 0.32
            rect = QRectF(cx - rw, cy - rh, rw * 2, rh * 2)
            painter.drawEllipse(rect)
            # a little orbiting satellite dot
            angle = math.radians((self.rotation * (2 + i) * 0.6) % 360)
            sx = cx + rw * math.cos(angle)
            sy = cy + rh * math.sin(angle)
            painter.setBrush(QBrush(QColor(*self.ring_color, 220)))
            painter.setPen(Qt.NoPen)
            painter.drawEllipse(QPointF(sx, sy), 3, 3)
            pen.setWidthF(1.2)
            painter.setPen(pen)
            painter.setBrush(Qt.NoBrush)
        painter.restore()

    def _draw_atmosphere_glow(self, painter, cx, cy, radius):
        painter.save()
        grad = QRadialGradient(cx, cy, radius * 1.35)
        r, g, b = self.ring_color
        grad.setColorAt(0.75, QColor(r, g, b, 0))
        grad.setColorAt(0.92, QColor(r, g, b, 70))
        grad.setColorAt(1.0, QColor(r, g, b, 0))
        painter.setBrush(QBrush(grad))
        painter.setPen(Qt.NoPen)
        painter.drawEllipse(QPointF(cx, cy), radius * 1.35, radius * 1.35)
        painter.restore()

    def _draw_sphere(self, painter, cx, cy, radius):
        painter.save()
        r, g, b = self.base_color
        grad = QRadialGradient(cx - radius * 0.35, cy - radius * 0.35, radius * 1.6)
        grad.setColorAt(0.0, QColor(min(r + 60, 255), min(g + 60, 255), min(b + 60, 255)))
        grad.setColorAt(0.5, QColor(r, g, b))
        grad.setColorAt(1.0, QColor(int(r * 0.25), int(g * 0.25), int(b * 0.25)))
        painter.setBrush(QBrush(grad))
        painter.setPen(QPen(QColor(*self.ring_color, 160), 1.5))
        painter.drawEllipse(QPointF(cx, cy), radius, radius)
        painter.restore()

    def _draw_terrain(self, painter, cx, cy, radius):
        painter.save()
        clip = QPainterPath()
        clip.addEllipse(QPointF(cx, cy), radius, radius)
        painter.setClipPath(clip)
        painter.setPen(Qt.NoPen)
        for feat in self._terrain_features:
            lon = (feat["lon"] + self.rotation) % 360
            # project longitude to x offset; features near +-90 deg (limb) vanish
            facing = math.cos(math.radians(lon))
            if facing < -0.15:
                continue
            x = cx + math.sin(math.radians(lon)) * radius * 0.85
            lat_rad = math.radians(feat["lat"])
            y = cy - math.sin(lat_rad) * radius * 0.85
            squash = max(0.15, facing)
            size = radius * feat["size"] * squash
            r, g, b = self.base_color
            shade = feat["shade"]
            col = QColor(
                max(0, min(255, r + shade)),
                max(0, min(255, g + shade)),
                max(0, min(255, b + shade)),
                int(140 * squash),
            )
            painter.setBrush(QBrush(col))
            painter.drawEllipse(QPointF(x, y), size, size * 0.7)
        painter.restore()

    def _draw_terminator_shading(self, painter, cx, cy, radius):
        """Soft day/night shadow overlay for extra depth."""
        painter.save()
        clip = QPainterPath()
        clip.addEllipse(QPointF(cx, cy), radius, radius)
        painter.setClipPath(clip)
        grad = QRadialGradient(cx + radius * 0.55, cy + radius * 0.55, radius * 1.3)
        grad.setColorAt(0.0, QColor(0, 0, 0, 0))
        grad.setColorAt(1.0, QColor(0, 0, 0, 140))
        painter.setBrush(QBrush(grad))
        painter.setPen(Qt.NoPen)
        painter.drawRect(QRectF(cx - radius, cy - radius, radius * 2, radius * 2))
        painter.restore()
