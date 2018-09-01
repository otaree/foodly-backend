const router = require('express').Router()

const CartController = require('../controller/cart.controller')

const cartController = new CartController()


// router.get('/', cartController.get)
router.delete('/remove', cartController.removeProduct)
router.patch('/increment', cartController.incrementProductCount)
router.patch('/decrement', cartController.decrementProductCount)
router.put('/add', cartController.addProduct)
router.put('/clear', cartController.clearCart)

module.exports = router