const router = require('express').Router()

const OrderController = require('../controller/order.controller')

const orderController = new OrderController()

router.get('/', orderController.pagination)
router.get('/purchase/:razor_id', orderController.purchase)
router.get('/:id', orderController.get)

module.exports = router