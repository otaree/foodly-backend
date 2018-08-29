const axios = require('axios')
const Order = require('../models/Order')

class EmptyProductError extends Error {
  static type () {
    return "EmptyProductError"
  }
  constructor(...args) {
    super(...args)
    this.type = "EmptyProductError";
    Error.captureStackTrace(this, EmptyProductError)
  }
}

class OrderController {

  /**
   * creates a order
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async create(req, res) {
    const { products } = req.body
    try {
      if (products.length === 0) throw new EmptyProductError();

      const order = await new Order({ products }).save()

      res.json(order)
    } catch (e) {
      if (e.type === EmptyProductError.type()) {
        return res.status(401).json({
          error: 'products array should at least contain single product id'
        })
      }
      res.status(400).json()
    }
  }

  /**
   * captures the payment
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async purchase(req, res) {
    const { razor_id } = req.params
    try {
      const response = await axios.post(`https://${process.env.RAZOR_ID}:${process.env.RAZOR_SECRET}@api.razorpay.com/v1/payments/${razor_id}/capture`, { amount: "2000" })
      console.log(response.data)
      res.json({
        message: 'success'
      })
    } catch (error) {
      console.error(error)
      res.status(400).json({
        message: 'failed'
      })
    }
  }
}

module.exports = OrderController;