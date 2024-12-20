// routes/reservationRoutes.js
const express = require('express');
const router = express.Router();
const { createReservation, getReservations } = require('../controllers/reservationController');

// POST route to create a reservation
router.post('/', (req, res, next) => {
    // console.log('POST request to /api/reservations received', req.body); // Log incoming POST request
    next(); // Call the next middleware
}, createReservation);

// GET route to fetch all reservations
router.get('/', (req, res, next) => {
    // console.log('GET request to /api/reservations received'); // Log incoming GET request
    next(); // Call the next middleware
}, getReservations);

module.exports = router;
