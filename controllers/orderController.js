// controllers/orderController.js
const Order = require('../models/Order');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { name, items, price } = req.body;

    // Log the order details being created
    // console.log('Creating order with details:', { name, items, price });

    const newOrder = new Order({
      name,
      items,
      price,
    });

    const savedOrder = await newOrder.save();
    
    // Log the saved order details
    // console.log('Order created successfully:', savedOrder);

    res.status(201).json(savedOrder);
  } catch (error) {
    // console.error('Error creating order:', error.message); // Log the error message
    res.status(500).json({ message: error.message });
  }
};

// Get all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    // Log the fetched orders
    // console.log('Fetched orders:', orders);

    res.status(200).json(orders);
  } catch (error) {
    // console.error('Error fetching orders:', error.message); // Log the error message
    res.status(500).json({ message: error.message });
  }
};
