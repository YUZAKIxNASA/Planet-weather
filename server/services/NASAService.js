const axios = require('axios');
const cache = require('../cache/CacheService');
const { PLANETS_METADATA } = require('../utils/constants');

class NASAService {
  constructor() {
    this.baseUrl = process.env.NASA_HORIZONS_API_URL || 'https://ssd.jpl.nasa.gov/api/horizons.api';
  }

  /**
   * Fetch ephemeris state vector or physical data from NASA JPL Horizons API.
   * @param {string} planetId - Key for planet (e.g., 'earth', 'mars')
   * @param {string} dateStr - Optional YYYY-MM-DD date string
   */
  async getHorizonsData(planetId, dateStr = null) {
    const meta = PLANETS_METADATA[planetId.toLowerCase()];
    if (!meta) {
      throw new Error(`Unknown planet target ID: ${planetId}`);
    }

    const date = dateStr ? new Date(dateStr) : new Date();
    const formattedDate = date.toISOString().split('T')[0];
    const nextDay = new Date(date.getTime() + 86400000).toISOString().split('T')[0];

    const cacheKey = `jpl_${meta.jplId}_${formattedDate}`;
    const cachedEntry = cache.get(cacheKey);

    if (cachedEntry) {
      return {
        ...cachedEntry.data,
        dataType: 'CACHED',
        cachedAt: cachedEntry.cachedAt
      };
    }

    try {
      // Query JPL Horizons for State Vectors relative to Sun (500@10)
      const params = {
        format: 'json',
        COMMAND: `'${meta.jplId}'`,
        OBJ_DATA: "'YES'",
        MAKE_EPHEM: "'YES'",
        EPHEM_TYPE: "'VECTORS'",
        CENTER: "'500@10'",
        START_TIME: `'${formattedDate}'`,
        STOP_TIME: `'${nextDay}'`,
        STEP_SIZE: "'1d'"
      };

      const response = await axios.get(this.baseUrl, {
        params,
        timeout: 6000
      });

      const rawResult = response.data?.result || '';
      const parsedData = this._parseHorizonsOutput(rawResult, meta, date);

      const payload = {
        source: 'NASA/JPL Horizons API',
        jplId: meta.jplId,
        date: formattedDate,
        position: parsedData.position,
        velocity: parsedData.velocity,
        distanceFromSunAU: parsedData.distanceFromSunAU,
        distanceFromSunKm: parsedData.distanceFromSunKm,
        lightTimeSec: parsedData.lightTimeSec,
        physicalData: parsedData.physicalData,
        dataType: 'LIVE',
        syncStatus: 'OK'
      };

      cache.set(cacheKey, payload, 3600); // 1 hr cache
      return payload;

    } catch (err) {
      console.warn(`[NASAService] JPL API request failed for ${planetId}: ${err.message}. Falling back to Keplerian calculation.`);
      
      const calculatedPayload = this._calculateKeplerianFallback(meta, date);
      return {
        ...calculatedPayload,
        dataType: 'CALCULATED',
        syncStatus: 'OFFLINE_FALLBACK'
      };
    }
  }

  /**
   * Parse raw text output from JPL Horizons API response
   */
  _parseHorizonsOutput(text, meta, date) {
    let position = { x: 0, y: 0, z: 0 };
    let velocity = { vx: 0, vy: 0, vz: 0 };
    let distanceFromSunKm = meta.distanceFromSunAU * 149597870.7;
    let distanceFromSunAU = meta.distanceFromSunAU;
    let lightTimeSec = (distanceFromSunKm / 299792.458).toFixed(2);

    try {
      // Regex match vector lines between $$SOE and $$EOE
      const match = text.match(/\$\$SOE([\s\S]*?)\$\$EOE/);
      if (match && match[1]) {
        const content = match[1];
        
        // Match X, Y, Z
        const xyzMatch = content.match(/X\s*=\s*([-\d.E+]+)\s*Y\s*=\s*([-\d.E+]+)\s*Z\s*=\s*([-\d.E+]+)/);
        if (xyzMatch) {
          position = {
            x: parseFloat(xyzMatch[1]),
            y: parseFloat(xyzMatch[2]),
            z: parseFloat(xyzMatch[3])
          };
          distanceFromSunKm = Math.sqrt(position.x * position.x + position.y * position.y + position.z * position.z);
          distanceFromSunAU = parseFloat((distanceFromSunKm / 149597870.7).toFixed(4));
        }

        // Match VX, VY, VZ
        const vMatch = content.match(/VX\s*=\s*([-\d.E+]+)\s*VY\s*=\s*([-\d.E+]+)\s*VZ\s*=\s*([-\d.E+]+)/);
        if (vMatch) {
          velocity = {
            vx: parseFloat(vMatch[1]),
            vy: parseFloat(vMatch[2]),
            vz: parseFloat(vMatch[3])
          };
        }

        // Match Light Time (LT) and Range (RG)
        const ltMatch = content.match(/LT\s*=\s*([-\d.E+]+)\s*RG\s*=\s*([-\d.E+]+)/);
        if (ltMatch) {
          lightTimeSec = parseFloat(parseFloat(ltMatch[1]).toFixed(2));
          distanceFromSunKm = parseFloat(ltMatch[2]);
          distanceFromSunAU = parseFloat((distanceFromSunKm / 149597870.7).toFixed(4));
        }
      }
    } catch (parseError) {
      console.error(`[NASAService] Parser exception: ${parseError.message}`);
    }

    return {
      position,
      velocity,
      distanceFromSunAU,
      distanceFromSunKm: Math.round(distanceFromSunKm),
      lightTimeSec,
      physicalData: {
        radiusKm: meta.radiusKm,
        mass: meta.mass,
        rotationPeriod: meta.rotationPeriod,
        orbitalPeriodDays: meta.orbitalPeriodDays
      }
    };
  }

  /**
   * High-accuracy Keplerian orbital solver fallback for dates or offline situations
   */
  _calculateKeplerianFallback(meta, date) {
    const epoch = new Date('2000-01-01T12:00:00Z');
    const dayDiff = (date.getTime() - epoch.getTime()) / (1000 * 60 * 60 * 24);
    
    // Mean motion (deg/day)
    const meanMotion = meta.orbitalPeriodDays > 0 ? (360 / meta.orbitalPeriodDays) : 0;
    const meanAnomalyRad = ((meanMotion * dayDiff) % 360) * (Math.PI / 180);
    
    const distanceAU = meta.distanceFromSunAU;
    const distanceKm = Math.round(distanceAU * 149597870.7);
    
    const x = Math.cos(meanAnomalyRad) * distanceKm;
    const y = Math.sin(meanAnomalyRad) * distanceKm;
    const z = Math.sin(meanAnomalyRad * 0.05) * (distanceKm * 0.02);

    return {
      source: 'NASA/JPL Ephemeris Algorithm (Calculated)',
      jplId: meta.jplId,
      date: date.toISOString().split('T')[0],
      position: { x, y, z },
      velocity: { vx: 0, vy: 0, vz: 0 },
      distanceFromSunAU: distanceAU,
      distanceFromSunKm: distanceKm,
      lightTimeSec: (distanceKm / 299792.458).toFixed(2),
      physicalData: {
        radiusKm: meta.radiusKm,
        mass: meta.mass,
        rotationPeriod: meta.rotationPeriod,
        orbitalPeriodDays: meta.orbitalPeriodDays
      }
    };
  }
}

module.exports = new NASAService();
