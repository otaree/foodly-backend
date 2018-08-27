const router = require('express').Router();
const ProductController = require('../controller/product.controller');

const productController = new ProductController();

router.get('/', productController.getAll);
router.get('/:id', productController.get);


module.exports = router;