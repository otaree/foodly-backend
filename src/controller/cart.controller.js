const Cart = require('../models/Cart')

class CartController {

  async addProduct(req, res) {
    try {
      console.log(req.body.item)
      const cart = await Cart.findOneAndUpdate({ owner: req.user._id }, { $push: { "products": req.body.item } }, { new: true })
      res.json({ cart })
    } catch (error) {
      console.error(error)
      res.status(400).json()
    }
  }

  async removeProduct(req, res) {
    try {
      const cart = await Cart.findOneAndUpdate({ owner: req.user._id }, { $pull: { products: { "product._id": req.body.item._id } } }, { new: true })
      res.json({ cart })
    } catch (error) {
      console.error(error)
      res.status(400).json()
    }
  }

  async incrementProductCount(req, res) {
    try {
      const cart = await Cart.findOneAndUpdate({ owner: req.user._id , "products._id": req.body.productId }, { $inc: { "products.$.qty": 1 } }, { new: true } )
      res.json({ cart })
    } catch (error) {
      const cart = await Cart.findOneAndUpdate({ owner: req.user._id , "products._id": req.body.productId }, { $inc: { "products.$.qty": 1 } }, { new: true } )
      res.json({ cart })
    }
  }

  async decrementProductCount(req, res) {
    try {
      const cart = await Cart.findOneAndUpdate({ owner: req.user._id , "products._id": req.body.productId }, { $inc: { "products.$.qty": -1 } }, { new: true } )
      res.json({ cart })
    } catch (error) {
      const cart = await Cart.findOneAndUpdate({ owner: req.user._id , "products._id": req.body.productId }, { $inc: { "products.$.qty": 1 } }, { new: true } )
      res.json({ cart })
    }
  }

  async clearCart(req, res) {
    try {
      await Cart.findOneAndUpdate({ owner: req.user._id }, { $set: { products: [] } })
      res.json({
        message: 'cleared cart successfully'
      })
    } catch (error) {
      res.status(400).json()
    }
  }
}

module.exports = CartController