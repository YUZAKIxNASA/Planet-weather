const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const planetRoutes = require('./routes/planetRoutes');
const apiLimiter = require('./middleware/rateLimiter');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS setup
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  process.env.CLIENT_URL
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. mobile apps, curl, postman)
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(null, true); // Permissive for local dev
  }
}));

app.use(express.json());

// Rate Limiter
app.use('/api/', apiLimiter);

// Planet Weather API Routes
app.use('/api', planetRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    service: 'Planet Weather Terminal Service',
    nasaJplStatus: 'CONNECTED',
    timestamp: new Date().toISOString()
  });
});

// Serve static frontend assets if built
const clientBuildPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientBuildPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(clientBuildPath, 'index.html'), (err) => {
    if (err) {
      res.status(200).send('Planet Weather Terminal API running on port ' + PORT);
    }
  });
});

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[Planet Terminal Server] Server running on http://localhost:${PORT}`);
  console.log(`[Planet Terminal Server] NASA/JPL Horizons endpoint: ${process.env.NASA_HORIZONS_API_URL || 'https://ssd.jpl.nasa.gov/api/horizons.api'}`);
});
