const NodeCache = require('node-cache');

class CacheService {
  constructor(defaultTTL = 3600) {
    this.cache = new NodeCache({
      stdTTL: defaultTTL,
      checkperiod: 120,
      useClones: false
    });
  }

  get(key) {
    const data = this.cache.get(key);
    if (data) {
      return {
        data: data.payload,
        cachedAt: data.cachedAt,
        isCached: true
      };
    }
    return null;
  }

  set(key, value, ttl = undefined) {
    const cachedAt = new Date().toISOString();
    const entry = {
      payload: value,
      cachedAt
    };
    if (ttl !== undefined) {
      this.cache.set(key, entry, ttl);
    } else {
      this.cache.set(key, entry);
    }
    return entry;
  }

  flush() {
    this.cache.flushAll();
  }
}

module.exports = new CacheService();
