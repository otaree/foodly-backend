const router = require('express').Router()

const OrderController = require('../controller/order.controller')

const orderController = new OrderController()

router.post('/', orderController.create)
router.get('/purchase/:razor_id', orderController.purchase)

module.exports = router