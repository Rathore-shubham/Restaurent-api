const express = require('express');
const { register, login, requireRole } = require('../controllers/authController');

const router = express.Router();

// User registration
router.post('/register', register);

// User login
router.post('/login', login);

// Example protected routes based on roles
router.get('/customer', requireRole(['customer']), (req, res) => res.send('Customer Access'));
router.get('/provider', requireRole(['provider']), (req, res) => res.send('Provider Access'));
router.get('/admin', requireRole(['admin']), (req, res) => res.send('Admin Access'));

module.exports = router;
