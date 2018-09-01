const router = require('express').Router()

const CartController = require('../controller/cart.controller')

const cartController = new CartController()


// router.get('/', cartController.get)
router.patch('/remove', cartController.removeProduct)
router.patch('/increment', cartController.incrementProductCount)
router.patch('/decrement', cartController.decrementProductCount)
router.put('/add', cartController.addProduct)
router.delete('/clear', cartController.clearCart)

module.exports = router