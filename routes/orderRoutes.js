// routes/orderRoutes.js
const express = require('express');
const { createOrder, getOrders } = require('../controllers/orderController');

const router = express.Router();

// Log when a POST request to create a new order is received
router.post('/', (req, res, next) => {
//   console.log('POST request to /api/orders received:', req.body);
  next(); // Call the next middleware
}, createOrder); 

// Log when a GET request to retrieve all orders is received
router.get('/', (req, res, next) => {
//   console.log('GET request to /api/orders received');
  next(); // Call the next middleware
}, getOrders);

module.exports = router;
