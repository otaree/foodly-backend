const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String
  },
  img: String,
  price: Number,
  description: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});

module.exports = mongoose.model('Product', ProductSchema);