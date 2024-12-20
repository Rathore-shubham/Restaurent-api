const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  items: [String],
  price: Number,
});

module.exports = mongoose.model('Order', orderSchema);
