// controllers/authController.js
const User = require('../models/User'); // Import your User model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { requireRole } = require('../middleware/authMiddleware');


// User registration
exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
    
        const user = new User({ name, email, password, role });
        await user.save();
    
        res.status(201).json({ message: "User registered successfully" });
      } catch (error) {
        console.error("Registration Error: ", error); // Log error for debugging
        res.status(500).json({ message: "Internal server error" });
      }
}
// User login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};

// Middleware to require specific roles
exports.requireRole = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    };
};
