const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
  products: [
    {
      product: {},
      qty: {
        type: Number,
        default: 1
      }
    }
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Cart', CartSchema)