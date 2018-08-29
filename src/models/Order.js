const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  status: {
    type: String,
    default: 'initiated'
  }
})

module.exports = mongoose.model('Order', OrderSchema)