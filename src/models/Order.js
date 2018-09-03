const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  products: [{
    product: {},
    qty: {
      type: Number,
      required: true 
    }
  }],
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Order', OrderSchema)