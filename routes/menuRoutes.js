// routes/menuRoutes.js
const express = require('express');
const { getMenuItems, getMenuItemById } = require('../controllers/menuController');

const router = express.Router();

// Log when a GET request to fetch all menu items is received
router.get('/', (req, res, next) => {
  console.log('GET request to /api/menu received');
  next(); // Call the next middleware
}, getMenuItems);

// Log when a GET request to fetch a menu item by ID is received
router.get('/:id', (req, res, next) => {
  console.log(`GET request to /api/menu/${req.params.id} received`);
  next(); // Call the next middleware
}, getMenuItemById);

module.exports = router;
