/**
 * Authoritative planetary physical parameters, JPL target IDs, classification taxonomy, and atmosphere/surface data.
 */

const PLANETS_METADATA = {
  sun: {
    id: 'sun',
    jplId: '10',
    name: 'SUN',
    type: 'STAR',
    classification: 'Yellow Dwarf (G2V)',
    mass: '1.989 × 10^30 kg',
    radiusKm: 696340,
    meanTemperatureC: 5505, // Photosphere surface temp
    coreTemperatureC: 15700000,
    distanceFromSun: '0 AU (Center of Solar System)',
    distanceFromSunAU: 0,
    orbitalPeriodDays: 0,
    rotationPeriod: '25.38 days (equator)',
    moons: 0,
    atmosphere: 'H₂ (73.46%), He (24.85%), O₂ (0.77%), C (0.29%), Fe (0.16%)',
    surface: 'Photosphere / Solar Plasma / Magnetic Loops',
    axialTiltDeg: 7.25,
    status: 'ACTIVE MAIN SEQUENCE STAR'
  },
  mercury: {
    id: 'mercury',
    jplId: '199',
    name: 'MERCURY',
    type: 'PLANET',
    classification: 'Terrestrial Planet',
    mass: '3.3011 × 10^23 kg',
    radiusKm: 2439.7,
    meanTemperatureC: 167, // Day: 430C, Night: -180C
    tempRangeC: '-180 °C to +430 °C',
    distanceFromSun: '0.387 AU (57.9 million km)',
    distanceFromSunAU: 0.387,
    orbitalPeriodDays: 87.97,
    rotationPeriod: '58d 15h 30m',
    moons: 0,
    atmosphere: 'Surface-bounded Exosphere: O₂ (42%), Na (29%), H₂ (22%), He (6%), K (0.5%)',
    surface: 'Cratered Regolith / Silicate Rock / Impact Basins',
    axialTiltDeg: 0.034,
    status: 'STABLE ORBIT'
  },
  venus: {
    id: 'venus',
    jplId: '299',
    name: 'VENUS',
    type: 'PLANET',
    classification: 'Terrestrial Planet',
    mass: '4.8675 × 10^24 kg',
    radiusKm: 6051.8,
    meanTemperatureC: 464, // Runaway greenhouse
    surfacePressureAtm: 92, // ~92 bar
    distanceFromSun: '0.723 AU (108.2 million km)',
    distanceFromSunAU: 0.723,
    orbitalPeriodDays: 224.7,
    rotationPeriod: '243d 0h (Retrograde)',
    moons: 0,
    atmosphere: 'CO₂ (96.5%), N₂ (3.5%), SO₂ (0.015%), H₂O (0.002%)',
    surface: 'Volcanic Basalt Plains / Sulfuric Acid Cloud Cover',
    axialTiltDeg: 177.3,
    status: 'RUNAWAY GREENHOUSE TELEMETRY'
  },
  earth: {
    id: 'earth',
    jplId: '399',
    name: 'EARTH',
    type: 'PLANET',
    classification: 'Terrestrial Planet',
    mass: '5.972 × 10^24 kg',
    radiusKm: 6371.0,
    meanTemperatureC: 15,
    distanceFromSun: '1.00 AU (149.6 million km)',
    distanceFromSunAU: 1.00,
    orbitalPeriodDays: 365.25,
    rotationPeriod: '23h 56m 4s',
    moons: 1,
    atmosphere: 'N₂ (78.08%), O₂ (20.95%), Ar (0.93%), CO₂ (0.041%)',
    surface: 'Oceans (71%), Continents (29%), Polar Ice',
    axialTiltDeg: 23.44,
    status: 'HABITABLE TELEMETRY ACTIVE'
  },
  mars: {
    id: 'mars',
    jplId: '499',
    name: 'MARS',
    type: 'PLANET',
    classification: 'Terrestrial Planet',
    mass: '6.4171 × 10^23 kg',
    radiusKm: 3389.5,
    meanTemperatureC: -63,
    tempRangeC: '-140 °C to +20 °C',
    surfacePressureAtm: 0.006, // ~6.1 hPa
    distanceFromSun: '1.524 AU (227.9 million km)',
    distanceFromSunAU: 1.524,
    orbitalPeriodDays: 686.98,
    rotationPeriod: '24h 37m 22s',
    moons: 2, // Phobos, Deimos
    atmosphere: 'CO₂ (95.32%), N₂ (2.6%), Ar (1.9%), O₂ (0.13%), CO (0.08%)',
    surface: 'Iron Oxide Dust / Basaltic Rock / Polar Ice Caps',
    axialTiltDeg: 25.19,
    status: 'ROVER TELEMETRY ACTIVE'
  },
  jupiter: {
    id: 'jupiter',
    jplId: '599',
    name: 'JUPITER',
    type: 'PLANET',
    classification: 'Gas Giant',
    mass: '1.8982 × 10^27 kg',
    radiusKm: 69911,
    meanTemperatureC: -110, // 1 bar level
    distanceFromSun: '5.204 AU (778.5 million km)',
    distanceFromSunAU: 5.204,
    orbitalPeriodDays: 4332.59, // ~11.86 years
    rotationPeriod: '9h 55m 30s',
    moons: 95,
    atmosphere: 'H₂ (89.8%), He (10.2%), CH₄ (0.3%), NH₃ (0.02%)',
    surface: 'No Solid Surface / Metallic Hydrogen Core / Great Red Spot',
    axialTiltDeg: 3.13,
    status: 'JUNO TELEMETRY ACTIVE'
  },
  saturn: {
    id: 'saturn',
    jplId: '699',
    name: 'SATURN',
    type: 'PLANET',
    classification: 'Gas Giant',
    mass: '5.6834 × 10^26 kg',
    radiusKm: 58232,
    meanTemperatureC: -140, // 1 bar level
    distanceFromSun: '9.582 AU (1.433 billion km)',
    distanceFromSunAU: 9.582,
    orbitalPeriodDays: 10759.22, // ~29.45 years
    rotationPeriod: '10h 33m 38s',
    moons: 146,
    atmosphere: 'H₂ (96.3%), He (3.25%), CH₄ (0.45%), NH₃ (0.01%)',
    surface: 'No Solid Surface / Liquid Metallic Hydrogen / Prominent Ring System',
    axialTiltDeg: 26.73,
    status: 'MONITORING ACTIVE'
  },
  uranus: {
    id: 'uranus',
    jplId: '799',
    name: 'URANUS',
    type: 'PLANET',
    classification: 'Ice Giant',
    mass: '8.6810 × 10^25 kg',
    radiusKm: 25362,
    meanTemperatureC: -195, // Coldest planet atmosphere -224C
    distanceFromSun: '19.201 AU (2.871 billion km)',
    distanceFromSunAU: 19.201,
    orbitalPeriodDays: 30685.4, // ~84 years
    rotationPeriod: '17h 14m 24s (Retrograde)',
    moons: 28,
    atmosphere: 'H₂ (82.5%), He (15.2%), CH₄ (2.3%)',
    surface: 'Icy Mantle (H₂O, NH₃, CH₄) / Silicate-Iron Core',
    axialTiltDeg: 97.77,
    status: 'EXTREME AXIAL TILT MONITOR'
  },
  neptune: {
    id: 'neptune',
    jplId: '899',
    name: 'NEPTUNE',
    type: 'PLANET',
    classification: 'Ice Giant',
    mass: '1.0241 × 10^26 kg',
    radiusKm: 24622,
    meanTemperatureC: -200,
    distanceFromSun: '30.047 AU (4.495 billion km)',
    distanceFromSunAU: 30.047,
    orbitalPeriodDays: 60189.0, // ~164.8 years
    rotationPeriod: '16h 6m 36s',
    moons: 16,
    atmosphere: 'H₂ (80%), He (19%), CH₄ (1.5%)',
    surface: 'High-speed Super-Sonic Winds (2100 km/h) / Icy Mantle',
    axialTiltDeg: 28.32,
    status: 'DEEP ATMOSPHERE MONITOR'
  },
  moon: {
    id: 'moon',
    jplId: '301',
    name: 'MOON',
    type: 'NATURAL SATELLITE',
    classification: 'Lunar Planetary Mass Moon',
    mass: '7.342 × 10^22 kg',
    radiusKm: 1737.4,
    meanTemperatureC: -20, // Day: 120C, Night: -130C
    tempRangeC: '-130 °C to +120 °C',
    distanceFromSun: '1.00 AU (Mean distance from Earth: 384,400 km)',
    distanceFromSunAU: 1.00,
    distanceFromEarthKm: 384400,
    orbitalPeriodDays: 27.32, // Orbit around Earth
    rotationPeriod: '27.32 days (Tidally Locked)',
    moons: 0,
    atmosphere: 'Surface Exosphere: He, Ne, H₂, Ar',
    surface: 'Regolith / Impact Craters / Maria Basalt Plains',
    axialTiltDeg: 1.54,
    status: 'ORBITAL SYNC OK'
  },
  pluto: {
    id: 'pluto',
    jplId: '999',
    name: 'PLUTO',
    type: 'DWARF PLANET',
    classification: 'Kuiper Belt Dwarf Planet',
    mass: '1.303 × 10^22 kg',
    radiusKm: 1188.3,
    meanTemperatureC: -229,
    distanceFromSun: '39.482 AU (5.906 billion km)',
    distanceFromSunAU: 39.482,
    orbitalPeriodDays: 90560, // ~248 years
    rotationPeriod: '6d 9h 17m (Retrograde)',
    moons: 5, // Charon, Nix, Hydra, Kerberos, Styx
    atmosphere: 'Transient Nitrogen (N₂), Methane (CH₄), Carbon Monoxide (CO)',
    surface: 'Nitrogen/Methane Ice Crust / Water Ice Bedrock / Tombaugh Regio',
    axialTiltDeg: 122.53,
    status: 'KUIPER BELT OBSERVATION'
  }
};

const DEFAULT_EARTH_LOCATIONS = [
  { name: 'New Delhi, India', lat: 28.6139, lon: 77.2090 },
  { name: 'London, UK', lat: 51.5074, lon: -0.1278 },
  { name: 'New York, USA', lat: 40.7128, lon: -74.0060 },
  { name: 'Tokyo, Japan', lat: 35.6762, lon: 139.6503 },
  { name: 'Sydney, Australia', lat: -33.8688, lon: 151.2093 },
  { name: 'Paris, France', lat: 48.8566, lon: 2.3522 },
  { name: 'Cairo, Egypt', lat: 30.0444, lon: 31.2357 },
  { name: 'Rio de Janeiro, Brazil', lat: -22.9068, lon: -43.1729 }
];

module.exports = {
  PLANETS_METADATA,
  DEFAULT_EARTH_LOCATIONS
};
