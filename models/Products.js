const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

module.exports = mongoose.model('Product', productSchema);
