const router = require('express').Router()

const OrderController = require('../controller/order.controller')

const orderController = new OrderController()

router.get('/purchase/:razor_id', orderController.purchase)
router.get('/:id', orderController.get)
router.get('/secure', (req, res) => res.json({ message: 'This is a secure route.' }))

module.exports = router