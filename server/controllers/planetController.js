const planetService = require('../services/PlanetService');
const nasaService = require('../services/NASAService');
const weatherService = require('../services/WeatherService');

class PlanetController {
  async getPlanets(req, res, next) {
    try {
      const planets = planetService.getAllPlanets();
      res.json({
        success: true,
        count: planets.length,
        data: planets
      });
    } catch (err) {
      next(err);
    }
  }

  async getPlanetDetails(req, res, next) {
    try {
      const { id } = req.params;
      const { date, lat, lon, locationName } = req.query;
      const planetData = await planetService.getPlanetDetails(id, date, lat, lon, locationName);
      res.json({
        success: true,
        data: planetData
      });
    } catch (err) {
      res.status(404);
      next(err);
    }
  }

  async getPlanetPosition(req, res, next) {
    try {
      const { id } = req.params;
      const { date } = req.query;
      const horizons = await nasaService.getHorizonsData(id, date);
      res.json({
        success: true,
        planetId: id,
        data: {
          position: horizons.position,
          velocity: horizons.velocity,
          distanceFromSunAU: horizons.distanceFromSunAU,
          distanceFromSunKm: horizons.distanceFromSunKm,
          lightTimeSec: horizons.lightTimeSec,
          dataType: horizons.dataType,
          source: horizons.source
        }
      });
    } catch (err) {
      next(err);
    }
  }

  async getPlanetEphemeris(req, res, next) {
    try {
      const { id } = req.params;
      const { date } = req.query;
      const horizons = await nasaService.getHorizonsData(id, date);
      res.json({
        success: true,
        planetId: id,
        data: horizons
      });
    } catch (err) {
      next(err);
    }
  }

  async getPlanetOrbit(req, res, next) {
    try {
      const { id } = req.params;
      const details = await planetService.getPlanetDetails(id);
      res.json({
        success: true,
        planetId: id,
        data: {
          orbitalPeriodDays: details.physical.orbitalPeriodDays,
          rotationPeriod: details.physical.rotationPeriod,
          axialTiltDeg: details.physical.axialTiltDeg,
          distanceFromSunAU: details.ephemeris.distanceFromSunAU,
          dataType: 'STATIC_AND_CALCULATED'
        }
      });
    } catch (err) {
      next(err);
    }
  }

  async getPlanetEnvironment(req, res, next) {
    try {
      const { id } = req.params;
      const details = await planetService.getPlanetDetails(id);
      res.json({
        success: true,
        planetId: id,
        data: {
          atmosphere: details.physical.atmosphere,
          surface: details.physical.surface,
          mass: details.physical.mass,
          radiusKm: details.physical.radiusKm,
          moonsCount: details.physical.moonsCount
        }
      });
    } catch (err) {
      next(err);
    }
  }

  async getPlanetWeather(req, res, next) {
    try {
      const { id } = req.params;
      const { lat, lon, locationName } = req.query;

      if (id.toLowerCase() === 'earth') {
        const latitude = lat ? parseFloat(lat) : 28.6139;
        const longitude = lon ? parseFloat(lon) : 77.2090;
        const name = locationName || 'New Delhi, India (Default)';
        const weather = await weatherService.getEarthWeather(latitude, longitude, name);
        return res.json({
          success: true,
          planetId: 'earth',
          hasLiveWeather: true,
          data: weather
        });
      }

      // Non-Earth weather
      const details = await planetService.getPlanetDetails(id);
      return res.json({
        success: true,
        planetId: id,
        hasLiveWeather: false,
        data: details.weather
      });

    } catch (err) {
      next(err);
    }
  }

  getPresetLocations(req, res) {
    const locations = weatherService.getPresetLocations();
    res.json({
      success: true,
      data: locations
    });
  }
}

module.exports = new PlanetController();
