function errorHandler(err, req, res, next) {
  console.error(`[Express Error Handler] ${req.method} ${req.url}:`, err.message);
  
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  
  res.status(statusCode).json({
    error: err.message || 'Internal Planetary Service Error',
    status: 'FAILED',
    timestamp: new Date().toISOString(),
    dataType: 'UNAVAILABLE'
  });
}

module.exports = errorHandler;
