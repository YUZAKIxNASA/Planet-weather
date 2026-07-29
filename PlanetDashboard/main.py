#!/usr/bin/env python3
"""
main.py

Entry point for Planet Dashboard. Boots a small CRT splash screen, then
swaps in the full MainWindow. Run with:

    python main.py
"""

import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from PySide6.QtWidgets import QApplication
from PySide6.QtGui import QPalette, QColor
from PySide6.QtCore import Qt

from ui.loading_screen import LoadingScreen
from ui.main_window import MainWindow


def apply_dark_palette(app: QApplication):
    app.setStyle("Fusion")
    palette = QPalette()
    palette.setColor(QPalette.Window, QColor(5, 16, 12))
    palette.setColor(QPalette.WindowText, QColor(200, 255, 220))
    palette.setColor(QPalette.Base, QColor(10, 20, 16))
    palette.setColor(QPalette.Text, QColor(200, 255, 220))
    palette.setColor(QPalette.Button, QColor(10, 30, 20))
    palette.setColor(QPalette.ButtonText, QColor(200, 255, 220))
    palette.setColor(QPalette.Highlight, QColor(0, 255, 140))
    palette.setColor(QPalette.HighlightedText, QColor(0, 0, 0))
    app.setPalette(palette)


def main():
    app = QApplication(sys.argv)
    app.setApplicationName("Planet Dashboard")
    apply_dark_palette(app)

    splash = LoadingScreen()
    splash.resize(900, 500)
    splash.show()

    main_window = {"win": None}

    def launch_main():
        main_window["win"] = MainWindow()
        main_window["win"].show()
        splash.close()

    splash.done.connect(launch_main)

    sys.exit(app.exec())


if __name__ == "__main__":
    main()
