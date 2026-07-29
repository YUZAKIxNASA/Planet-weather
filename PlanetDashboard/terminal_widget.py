"""
widgets/terminal_widget.py

Green-on-black CRT terminal panel with a typewriter reveal animation and
a scrollable log/console beneath it. Used for the planet readout
("TEMP: ...", "WIND: ...") and for a running system log.
"""

from PySide6.QtWidgets import QWidget, QVBoxLayout, QPlainTextEdit, QLabel
from PySide6.QtCore import Qt, QTimer
from PySide6.QtGui import QFont, QColor, QTextCursor


class TerminalWidget(QWidget):
    def __init__(self, accent=(0, 255, 140), parent=None):
        super().__init__(parent)
        self.accent = accent
        self._queue = []  # list of full lines waiting to be typed
        self._current_line = ""
        self._char_index = 0

        layout = QVBoxLayout(self)
        layout.setContentsMargins(0, 0, 0, 0)

        self.header = QLabel("● TERMINAL")
        self.header.setStyleSheet(self._header_style())
        layout.addWidget(self.header)

        self.console = QPlainTextEdit()
        self.console.setReadOnly(True)
        self.console.setFont(QFont("Consolas", 11))
        self.console.setStyleSheet(self._console_style())
        self.console.setLineWrapMode(QPlainTextEdit.WidgetWidth)
        layout.addWidget(self.console)

        self._type_timer = QTimer(self)
        self._type_timer.timeout.connect(self._type_tick)
        self._type_timer.start(14)

    def set_accent(self, rgb):
        self.accent = rgb
        self.header.setStyleSheet(self._header_style())
        self.console.setStyleSheet(self._console_style())

    def _header_style(self):
        r, g, b = self.accent
        return (
            f"color: rgb({r},{g},{b}); background: rgba({r},{g},{b},40); "
            f"padding: 4px 8px; font-weight: bold; font-family: Consolas;"
        )

    def _console_style(self):
        r, g, b = self.accent
        return (
            f"background-color: rgba(4,10,8,220); color: rgb({r},{g},{b}); "
            f"border: 1px solid rgba({r},{g},{b},120); padding: 6px;"
        )

    def clear(self):
        self.console.clear()
        self._queue = []
        self._current_line = ""
        self._char_index = 0

    def write_line_instant(self, text: str):
        self.console.appendPlainText(text)
        self._scroll_bottom()

    def queue_lines(self, lines):
        """Feed a batch of lines to be typed out one character at a time."""
        self._queue.extend(lines)

    def _type_tick(self):
        if not self._current_line and self._queue:
            self._current_line = self._queue.pop(0)
            self._char_index = 0
            self.console.appendPlainText("")
        if self._current_line:
            self._char_index += 1
            shown = self._current_line[: self._char_index]
            self._replace_last_line(shown)
            if self._char_index >= len(self._current_line):
                self._current_line = ""
        self._scroll_bottom()

    def _replace_last_line(self, text):
        doc = self.console.document()
        block = doc.lastBlock()
        cursor = self.console.textCursor()
        cursor.setPosition(block.position())
        cursor.select(QTextCursor.LineUnderCursor)
        cursor.insertText(text)

    def _scroll_bottom(self):
        sb = self.console.verticalScrollBar()
        sb.setValue(sb.maximum())
