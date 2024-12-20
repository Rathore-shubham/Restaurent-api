// controllers/menuController.js
const MenuItem = require('../models/MenuItem');

// Get all menu items
exports.getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find(); // Retrieve all menu items from the database
        console.log('Fetched menu items:', menuItems); // Log the fetched menu items
        res.status(200).json(menuItems); // Send the menu items as a JSON response
    } catch (error) {
        console.error('Error fetching menu items:', error.message); // Log the error message
        res.status(500).json({ message: error.message }); // Handle any errors
    }
};

// Get a menu item by ID
exports.getMenuItemById = async (req, res) => {
    try {
        const menuItem = await MenuItem.findById(req.params.id); // Find the menu item by ID
        if (!menuItem) {
            console.log(`Menu item with ID ${req.params.id} not found`); // Log if item is not found
            return res.status(404).json({ message: 'Item not found' }); // If not found, return 404
        }
        console.log('Fetched menu item:', menuItem); // Log the fetched menu item
        res.status(200).json(menuItem); // Send the found menu item as a JSON response
    } catch (error) {
        console.error('Error fetching menu item:', error.message); // Log the error message
        res.status(500).json({ message: error.message }); // Handle any errors
    }
};
