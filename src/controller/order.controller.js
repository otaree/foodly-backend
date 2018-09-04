const axios = require('axios')
const Order = require('../models/Order')
const Cart = require('../models/Cart')

const capturePayment = async (razor_id, totalPrice) => {
  try {
    const response = await axios.post(`https://${process.env.RAZOR_ID}:${process.env.RAZOR_SECRET}@api.razorpay.com/v1/payments/${razor_id}/capture`, {
      amount: String(totalPrice)
    })
    return Promise.resolve(response.data)
  } catch (error) {
    return Promise.reject({ status: error.response.status, msg: error.response.data.error.description })
  }
}

const getCart = async (user) => {
  try {
    const cart = await Cart.findOne({
      owner: user._id
    })
    if (!cart || cart.products.length === 0) return Promise.reject({
      status: 400,
      msg: 'cart is empty'
    })
    return Promise.resolve(cart)
  } catch (error) {
    return Promise.reject({ status: 500, message: "internal server error"  })
  }
}

const clearCart = async (user) => {
  try {
    await Cart.findOneAndUpdate({
      owner: user._id
    }, {
      $set: {
        products: []
      }
    })
    return Promise.resolve()
  } catch (error) {
    return Promise.reject({ status: 500, message: "internal server error"  })
  }
}

const createOrder = async (user, products) => {
  try {
    const order = await new Order({
      products,
      buyer: user._id
    }).save()
    return Promise.resolve(order)
  } catch (error) {
    return Promise.reject({ status: 500, message: "internal server error"  })
  }
}


class OrderController {

  /**
   * captures the payment
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async purchase(req, res) {
    const { razor_id } = req.params
    try {
      const user = req.user
      const cart = await getCart(user)
      let totalPrice = 0
      cart.products.forEach(item =>  totalPrice += (item.product.price * item.qty))
      const razorData = await capturePayment(razor_id, totalPrice)
      // console.log(razorData)
      await clearCart(user)
      const order = await createOrder(user, cart.products)
      res.json({
        message: 'success',
        order
      })
    } catch (error) {
      res.status(error.status).json({
        message: error.msg
      })
    }
  }

  async get(req, res) {
    const { id } = req.params
    try {
      const order = await Order.findOne({ _id: id, buyer: req.user._id })
      if (!order) return res.status(400).json({ message: 'No order found' })
      res.json({ order })
    } catch (error) {
      res.status(400).json({})
    }
  }

  async pagination(req, res) {
    const user = req.user
    let { limit, page } = req.query;
    limit = !limit ? 2 : parseInt(limit);
    page = !page ? 0 : parseInt(page);
    try {
      const orders = await Order.find({ buyer: user._id }).limit(limit).skip(limit * page).sort('-created')
      console.log(orders.length)
      res.json({
        orders,
        next: limit === orders.length ? true : false
      })
    } catch (error) {
      console.error(error)
      res.status(500).json()
    }
  }

}

module.exports = OrderController;