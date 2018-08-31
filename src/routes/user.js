const router = require('express').Router()

const UserController = require('../controller/user.controller')

const userController = new UserController()

router.post('/setaddress', userController.setAddress)


module.exports = router