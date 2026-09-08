const express = require('express');
const router = express.Router();
const planetController = require('../controllers/planetController');

// List all planets
router.get('/planets', planetController.getPlanets);

// Preset Earth locations
router.get('/locations', planetController.getPresetLocations);

// Specific planet details
router.get('/planet/:id', planetController.getPlanetDetails);
router.get('/planet/:id/position', planetController.getPlanetPosition);
router.get('/planet/:id/ephemeris', planetController.getPlanetEphemeris);
router.get('/planet/:id/orbit', planetController.getPlanetOrbit);
router.get('/planet/:id/environment', planetController.getPlanetEnvironment);
router.get('/planet/:id/weather', planetController.getPlanetWeather);

module.exports = router;
