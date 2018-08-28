const router = require('express').Router();

const CategoryController = require('../controller/category.controller');

const categoryController = new CategoryController();

router.get('/', categoryController.getAll);
router.get('/:id', categoryController.get);

module.exports = router;
