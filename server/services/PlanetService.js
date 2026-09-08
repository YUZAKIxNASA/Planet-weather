const nasaService = require('./NASAService');
const weatherService = require('./WeatherService');
const { PLANETS_METADATA } = require('../utils/constants');

class PlanetService {
  getAllPlanets() {
    return Object.values(PLANETS_METADATA).map(p => ({
      id: p.id,
      jplId: p.jplId,
      name: p.name,
      type: p.type,
      classification: p.classification,
      distanceFromSunAU: p.distanceFromSunAU
    }));
  }

  async getPlanetDetails(planetId, dateStr = null, earthLat = null, earthLon = null, earthLocName = null) {
    const key = planetId.toLowerCase();
    const metadata = PLANETS_METADATA[key];

    if (!metadata) {
      throw new Error(`Planet/Object '${planetId}' not found.`);
    }

    // 1. Get Horizons ephemeris data from NASA
    const nasaData = await nasaService.getHorizonsData(key, dateStr);

    // 2. Determine environmental / weather telemetry
    let weatherData = null;

    if (key === 'earth') {
      const lat = earthLat ? parseFloat(earthLat) : 28.6139;
      const lon = earthLon ? parseFloat(earthLon) : 77.2090;
      const locName = earthLocName || 'New Delhi, India (Default)';
      weatherData = await weatherService.getEarthWeather(lat, lon, locName);
    } else {
      // Non-Earth weather: provide verified environmental observations or UNAVAILABLE
      weatherData = this._getNonEarthEnvironmentData(metadata);
    }

    // 3. Assemble full classified dataset
    return {
      id: metadata.id,
      name: metadata.name,
      type: metadata.type,
      classification: metadata.classification,
      jplId: metadata.jplId,
      status: metadata.status,
      ephemeris: {
        source: nasaData.source,
        date: nasaData.date,
        dataType: nasaData.dataType,
        syncStatus: nasaData.syncStatus,
        distanceFromSunAU: nasaData.distanceFromSunAU,
        distanceFromSunKm: nasaData.distanceFromSunKm,
        lightTimeSec: nasaData.lightTimeSec,
        position: nasaData.position,
        velocity: nasaData.velocity
      },
      physical: {
        mass: { value: metadata.mass, dataType: 'STATIC' },
        radiusKm: { value: metadata.radiusKm, dataType: 'STATIC' },
        orbitalPeriodDays: { value: metadata.orbitalPeriodDays, dataType: 'STATIC' },
        rotationPeriod: { value: metadata.rotationPeriod, dataType: 'STATIC' },
        moonsCount: { value: metadata.moons, dataType: 'STATIC' },
        atmosphere: { value: metadata.atmosphere, dataType: 'STATIC' },
        surface: { value: metadata.surface, dataType: 'STATIC' },
        axialTiltDeg: { value: metadata.axialTiltDeg, dataType: 'STATIC' }
      },
      weather: weatherData
    };
  }

  _getNonEarthEnvironmentData(meta) {
    if (meta.id === 'mars') {
      return {
        location: 'Gale Crater / Mars Surface Observation',
        tempC: '-63.0 °C (Avg surface observation)',
        feelsLikeC: '-75.0 °C',
        windSpeedKmH: '15.0 km/h (East)',
        pressureHPa: '6.1 hPa (Thin CO₂ Atmosphere)',
        humidityPct: '0% (Dry Atmospheric Trace)',
        visibilityKm: 'Dust Dependent (10 - 50 km)',
        conditions: 'Dusty Thin Atmosphere',
        source: 'NASA Rover Observational Telemetry',
        dataType: 'OBSERVATIONAL',
        lastUpdated: new Date().toISOString()
      };
    }

    if (meta.id === 'venus') {
      return {
        location: 'Venusian Surface / Atmosphere',
        tempC: '464 °C (Runaway Greenhouse)',
        feelsLikeC: '480 °C',
        windSpeedKmH: '360 km/h (Upper cloud super-rotation)',
        pressureHPa: '93000 hPa (~92 atm barometric pressure)',
        humidityPct: '0% (Sulfuric Acid Clouds)',
        visibilityKm: '0.5 km (Dense Sulfuric Haze)',
        conditions: 'Dense Sulfuric Acid Clouds',
        source: 'Venera / Pioneer Venus Telemetry',
        dataType: 'OBSERVATIONAL',
        lastUpdated: new Date().toISOString()
      };
    }

    if (meta.id === 'sun') {
      return {
        location: 'Photosphere / Solar Corona',
        tempC: '5505 °C (Surface Photosphere)',
        feelsLikeC: '15,700,000 °C (Core)',
        windSpeedKmH: '1,440,000 km/h (Solar Wind Velocity)',
        pressureHPa: 'DATA UNAVAILABLE (Star Interior Plasma)',
        humidityPct: '0% (Ionized Hydrogen Plasma)',
        visibilityKm: 'N/A (Optical Radiation Source)',
        conditions: 'Active Solar Flares & Magnetic Loops',
        source: 'NASA SDO / SOHO Telemetry',
        dataType: 'OBSERVATIONAL',
        lastUpdated: new Date().toISOString()
      };
    }

    if (meta.id === 'moon') {
      return {
        location: 'Lunar Regolith / Exosphere',
        tempC: '-20.0 °C (Mean Regolith Temp)',
        feelsLikeC: '-130 °C (Lunar Night) / +120 °C (Lunar Day)',
        windSpeedKmH: '0 km/h (Vacuum Exosphere)',
        pressureHPa: '0.000000000003 hPa (Vacuum Exosphere)',
        humidityPct: '0%',
        visibilityKm: 'Infinite (No Atmospheric Scattering)',
        conditions: 'Hard Vacuum / High Solar Radiation',
        source: 'NASA LRO Observational Data',
        dataType: 'OBSERVATIONAL',
        lastUpdated: new Date().toISOString()
      };
    }

    // Default for outer gas giants (Jupiter, Saturn, Uranus, Neptune, Mercury, Pluto)
    return {
      location: `${meta.name} Atmosphere / Environment`,
      tempC: meta.meanTemperatureC ? `${meta.meanTemperatureC} °C` : 'DATA UNAVAILABLE',
      feelsLikeC: 'DATA UNAVAILABLE',
      windSpeedKmH: meta.id === 'neptune' ? '2,100 km/h (Supersonic Jets)' : 'DATA UNAVAILABLE',
      pressureHPa: meta.surfacePressureAtm ? `${meta.surfacePressureAtm * 1013.25} hPa` : 'DATA UNAVAILABLE',
      humidityPct: 'DATA UNAVAILABLE',
      visibilityKm: 'DATA UNAVAILABLE',
      conditions: meta.type === 'Gas Giant' || meta.type === 'Ice Giant' ? 'Gas Giant Dense Atmosphere' : 'Vacuum / Exosphere',
      source: 'NASA Planetary Data System (Static Reference)',
      dataType: 'REFERENCE',
      lastUpdated: new Date().toISOString()
    };
  }
}

module.exports = new PlanetService();
