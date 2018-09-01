const _ = require('underscore')
const Cart = require('../models/Cart')

class CartService {
  async getUserCart(user, appCart) {
    try {
      let userCart = await Cart.findOne({
        owner: user._id
      })


      if (!userCart) {
        const products = appCart.items;
        const newCart = await new Cart({ owner: user._id, products }).save()
        return Promise.resolve(newCart)
      }


      if (appCart.items.length === 0) {
        return Promise.resolve(userCart)
      } else {
        const cart = await Cart.findOneAndUpdate({ owner: user._id }, { $set: { products: appCart.items }}, { new: true })
        return Promise.resolve(cart)
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }  
}


module.exports = CartService;