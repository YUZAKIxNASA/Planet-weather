"""
animations/typewriter.py

Small reusable helper: feed it a QLabel and a string, it reveals the
string one character at a time via QTimer. Used for splash/loading text
and any label that wants a "terminal typing" feel outside of the main
TerminalWidget console.
"""

from PySide6.QtCore import QTimer, QObject, Signal


class TypewriterLabel(QObject):
    finished = Signal()

    def __init__(self, label, interval_ms=18):
        super().__init__()
        self.label = label
        self.timer = QTimer()
        self.timer.timeout.connect(self._tick)
        self.interval_ms = interval_ms
        self.text = ""
        self.index = 0

    def start(self, text):
        self.text = text
        self.index = 0
        self.label.setText("")
        self.timer.start(self.interval_ms)

    def _tick(self):
        self.index += 1
        self.label.setText(self.text[: self.index])
        if self.index >= len(self.text):
            self.timer.stop()
            self.finished.emit()
