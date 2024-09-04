const express = require('express');
const config = require('./config/config');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
const PORT = config.server.port;

// Middleware
app.use(express.json());

// Routes
app.use('/api/notifications', notificationRoutes);

// Root route for testing
app.get('/', (req, res) => {
  res.send('Win-Me Game Backend is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
