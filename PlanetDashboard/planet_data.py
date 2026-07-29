"""
planets/planet_data.py

Static/reference data for all planets in the system. Each entry drives the
3D-look planet widget, the terminal readout, the info cards, and the
weather panel. Colors are used for the planet sphere shading, orbit ring
tint, and the matching dot in the color selector.
"""

PLANETS = {
    "Mercury": {
        "order": 1,
        "color": (150, 150, 160),
        "ring_color": (0, 255, 140),
        "radius_km": 2439.7,
        "gravity_g": 0.38,
        "temp_c": "-173 / 427",
        "wind_kmh": 0,
        "pressure_atm": 0.0,
        "surface": "Cratered regolith",
        "atmosphere": "Exosphere (Na, K, O)",
        "storm": "Solar Flare",
        "moons": 0,
        "orbit_days": 88,
        "day_hours": 4222.6,
        "description": (
            "Closest planet to the Sun. Airless and heavily cratered, "
            "Mercury swings between scorching days and frozen nights."
        ),
    },
    "Venus": {
        "order": 2,
        "color": (230, 200, 140),
        "ring_color": (255, 200, 60),
        "radius_km": 6051.8,
        "gravity_g": 0.90,
        "temp_c": "462 / 462",
        "wind_kmh": 6,
        "pressure_atm": 92.0,
        "surface": "Volcanic plains",
        "atmosphere": "CO2, N2, H2SO4 clouds",
        "storm": "Runaway Greenhouse",
        "moons": 0,
        "orbit_days": 225,
        "day_hours": 5832.5,
        "description": (
            "A hothouse world under a crushing CO2 atmosphere. Sulfuric "
            "acid clouds hide a volcanic surface hot enough to melt lead."
        ),
    },
    "Earth": {
        "order": 3,
        "color": (70, 140, 230),
        "ring_color": (0, 200, 255),
        "radius_km": 6371.0,
        "gravity_g": 1.0,
        "temp_c": "-88 / 58",
        "wind_kmh": 15,
        "pressure_atm": 1.0,
        "surface": "Oceans, continents",
        "atmosphere": "N2, O2, Ar",
        "storm": "Nominal",
        "moons": 1,
        "orbit_days": 365,
        "day_hours": 24.0,
        "description": (
            "The only known world with liquid water oceans and a "
            "breathable atmosphere. Home base."
        ),
    },
    "Mars": {
        "order": 4,
        "color": (200, 90, 60),
        "ring_color": (255, 90, 40),
        "radius_km": 3389.5,
        "gravity_g": 0.38,
        "temp_c": "-153 / 20",
        "wind_kmh": 30,
        "pressure_atm": 0.006,
        "surface": "Iron oxide dust, canyons",
        "atmosphere": "CO2, N2, Ar",
        "storm": "Global Dust Storm",
        "moons": 2,
        "orbit_days": 687,
        "day_hours": 24.6,
        "description": (
            "The Red Planet. Thin atmosphere, ancient river valleys, and "
            "the largest volcano and canyon in the solar system."
        ),
    },
    "Jupiter": {
        "order": 5,
        "color": (210, 180, 140),
        "ring_color": (255, 170, 90),
        "radius_km": 69911.0,
        "gravity_g": 2.53,
        "temp_c": "-145 / -108",
        "wind_kmh": 620,
        "pressure_atm": 1000.0,
        "surface": "No solid surface",
        "atmosphere": "H2, He, CH4",
        "storm": "Great Red Spot",
        "moons": 95,
        "orbit_days": 4333,
        "day_hours": 9.9,
        "description": (
            "A gas giant with a storm larger than Earth that has raged "
            "for centuries. Dozens of moons orbit in its shadow."
        ),
    },
    "Saturn": {
        "order": 6,
        "color": (230, 210, 160),
        "ring_color": (255, 220, 130),
        "radius_km": 58232.0,
        "gravity_g": 1.07,
        "temp_c": "-178 / -139",
        "wind_kmh": 1800,
        "pressure_atm": 1000.0,
        "surface": "No solid surface",
        "atmosphere": "H2, He",
        "storm": "Hexagonal Jet Stream",
        "moons": 146,
        "orbit_days": 10756,
        "day_hours": 10.7,
        "description": (
            "Famous for its dazzling ring system of ice and rock. Winds "
            "reach some of the fastest speeds in the solar system."
        ),
    },
    "Uranus": {
        "order": 7,
        "color": (140, 220, 220),
        "ring_color": (90, 230, 230),
        "radius_km": 25362.0,
        "gravity_g": 0.89,
        "temp_c": "-224 / -197",
        "wind_kmh": 900,
        "pressure_atm": 1000.0,
        "surface": "No solid surface",
        "atmosphere": "H2, He, CH4",
        "storm": "Faint Banding",
        "moons": 28,
        "orbit_days": 30687,
        "day_hours": 17.2,
        "description": (
            "An ice giant tipped on its side, rotating almost parallel "
            "to its orbital plane. Pale cyan haze from methane."
        ),
    },
    "Neptune": {
        "order": 8,
        "color": (70, 90, 220),
        "ring_color": (80, 110, 255),
        "radius_km": 24622.0,
        "gravity_g": 1.14,
        "temp_c": "-218 / -200",
        "wind_kmh": 2100,
        "pressure_atm": 1000.0,
        "surface": "No solid surface",
        "atmosphere": "H2, He, CH4",
        "storm": "Great Dark Spot",
        "moons": 16,
        "orbit_days": 60190,
        "day_hours": 16.1,
        "description": (
            "The windiest planet in the solar system, a deep blue ice "
            "giant at the edge of the known system."
        ),
    },
}

PLANET_ORDER = sorted(PLANETS.keys(), key=lambda k: PLANETS[k]["order"])


def get_planet(name: str) -> dict:
    return PLANETS.get(name, PLANETS["Mercury"])
