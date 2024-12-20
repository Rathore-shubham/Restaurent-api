// controllers/reservationController.js
const Reservation = require('../models/Reservation'); // Import your Reservation model

// Function to create a reservation
exports.createReservation = async (req, res) => {
    // console.log('Creating reservation with data:', req.body); // Log the reservation data
    try {
        const reservation = new Reservation(req.body);
        await reservation.save();
        // console.log('Reservation created:', reservation); // Log success
        res.status(201).json(reservation);
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(500).json({ message: 'Error creating reservation' });
    }
};

// Function to get all reservations
exports.getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find(); // Fetch all reservations
        // console.log('Fetched reservations:', reservations); // Log fetched reservations
        res.status(200).json(reservations); // Return reservations in JSON format
    } catch (error) {
        // console.error('Error fetching reservations:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
