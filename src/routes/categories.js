const router = require('express').Router();

const CategoryController = require('../controller/category.controller');

const categoryController = new CategoryController();

router.get('/', categoryController.getAll);

module.exports = router;
