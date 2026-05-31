const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ===== API Routes =====

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'OFFFIT API is running',
    timestamp: new Date().toISOString(),
  });
});

// Contact form / inquiry endpoint
app.post('/api/inquiry', (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({
      success: false,
      error: 'Name and phone are required',
    });
  }

  // In production, save to database and/or send notification
  console.log('New inquiry:', { name, phone, message, timestamp: new Date().toISOString() });

  res.json({
    success: true,
    message: 'Inquiry received! We will contact you shortly.',
  });
});

// Get pricing plans
app.get('/api/plans', (req, res) => {
  const plans = [
    { id: 1, price: 999, duration: '1 Month', bonus: '', popular: false },
    { id: 2, price: 1199, duration: '5 Weeks', bonus: '+5 Days', popular: false },
    { id: 3, price: 1599, duration: '2 Months', bonus: '+10 Days', popular: true },
    { id: 4, price: 2199, duration: '3 Months', bonus: '+20 Days', popular: false },
    { id: 5, price: 2999, duration: '4 Months', bonus: '+30 Days', popular: false },
  ];

  res.json({ success: true, data: plans });
});

// Get time slots
app.get('/api/slots', (req, res) => {
  const slots = {
    morning: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM'],
    evening: ['5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM'],
  };

  res.json({ success: true, data: slots });
});

// Get stats
app.get('/api/stats', (req, res) => {
  const stats = {
    happyMembers: 5000,
    kgsLost: 10000,
    transformations: 1000,
    rating: 4.9,
  };

  res.json({ success: true, data: stats });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 OFFFIT Server running on port ${PORT}`);
  console.log(`📍 API: http://localhost:${PORT}/api/health`);
});
