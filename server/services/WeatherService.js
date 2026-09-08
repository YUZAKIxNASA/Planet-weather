const axios = require('axios');
const cache = require('../cache/CacheService');
const { DEFAULT_EARTH_LOCATIONS } = require('../utils/constants');

class WeatherService {
  /**
   * Fetch live Earth weather for a specific latitude and longitude
   */
  async getEarthWeather(lat = 28.6139, lon = 77.2090, locationName = 'New Delhi, India') {
    const cacheKey = `weather_earth_${lat}_${lon}`;
    const cached = cache.get(cacheKey);

    if (cached) {
      return {
        ...cached.data,
        dataType: 'CACHED',
        cachedAt: cached.cachedAt
      };
    }

    // Try OpenWeatherMap if key exists, otherwise fallback to Open-Meteo
    if (process.env.OPENWEATHER_API_KEY) {
      try {
        const owmRes = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            lat,
            lon,
            appid: process.env.OPENWEATHER_API_KEY,
            units: 'metric'
          },
          timeout: 4000
        });
        
        const data = owmRes.data;
        const payload = {
          location: `${data.name}, ${data.sys.country}`,
          tempC: data.main.temp,
          feelsLikeC: data.main.feels_like,
          windSpeedKmH: (data.wind.speed * 3.6).toFixed(1),
          windDirectionDeg: data.wind.deg,
          pressureHPa: data.main.pressure,
          humidityPct: data.main.humidity,
          visibilityKm: (data.visibility / 1000).toFixed(1),
          conditions: data.weather[0]?.description || 'Clear',
          source: 'OpenWeatherMap',
          dataType: 'LIVE',
          lastUpdated: new Date().toISOString()
        };

        cache.set(cacheKey, payload, 600); // 10 min cache
        return payload;
      } catch (err) {
        console.warn(`[WeatherService] OpenWeatherMap failed, falling back to Open-Meteo: ${err.message}`);
      }
    }

    // Default to Open-Meteo (Keyless & Free)
    try {
      const omRes = await axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude: lat,
          longitude: lon,
          current: 'temperature_2m,relative_humidity_2m,apparent_temperature,surface_pressure,wind_speed_10m,wind_direction_10m,weather_code'
        },
        timeout: 4000
      });

      const current = omRes.data.current;
      const weatherCodeMap = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Foggy',
        48: 'Depositing rime fog',
        51: 'Light drizzle',
        61: 'Slight rain',
        71: 'Slight snowfall',
        80: 'Rain showers',
        95: 'Thunderstorm'
      };

      const conditionStr = weatherCodeMap[current.weather_code] || 'Partly cloudy';

      const payload = {
        location: locationName,
        tempC: current.temperature_2m,
        feelsLikeC: current.apparent_temperature,
        windSpeedKmH: current.wind_speed_10m,
        windDirectionDeg: current.wind_direction_10m,
        pressureHPa: current.surface_pressure,
        humidityPct: current.relative_humidity_2m,
        visibilityKm: 10.0,
        conditions: conditionStr,
        source: 'Open-Meteo Telemetry',
        dataType: 'LIVE',
        lastUpdated: new Date().toISOString()
      };

      cache.set(cacheKey, payload, 600);
      return payload;

    } catch (omErr) {
      console.error(`[WeatherService] Weather API failed: ${omErr.message}`);
      return {
        location: locationName,
        tempC: 'NO CURRENT DATA',
        feelsLikeC: 'NO CURRENT DATA',
        windSpeedKmH: 'NO CURRENT DATA',
        pressureHPa: 'NO CURRENT DATA',
        humidityPct: 'NO CURRENT DATA',
        visibilityKm: 'NO CURRENT DATA',
        conditions: 'NO CURRENT DATA',
        source: 'Weather API Unavailable',
        dataType: 'UNAVAILABLE',
        lastUpdated: new Date().toISOString()
      };
    }
  }

  getPresetLocations() {
    return DEFAULT_EARTH_LOCATIONS;
  }
}

module.exports = new WeatherService();
