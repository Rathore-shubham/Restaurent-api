// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Adjust path if needed

// Middleware to verify the token
const requireRole = (roles) => {
    return async (req, res, next) => {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        try {
            const decoded = jwt.verify(token, 'your_jwt_secret_key');  // Use your actual secret key
            const user = await User.findById(decoded.userId);
            if (!user || !roles.includes(user.role)) {
                return res.status(403).json({ message: 'Access denied' });
            }
            req.user = user;  // Attach the user to the request object
            next();
        } catch (error) {
            return res.status(400).json({ message: 'Invalid token' });
        }
    };
};

module.exports = { requireRole };
