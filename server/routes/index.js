const router = require('express').Router();

const { getCategories } = require('../controllers/categories');
const { getProducts, getProductData } = require('../controllers/products');

router.get('/products', getProducts);
router.get('/products/:id', getProductData);

router.get('/categories', getCategories);

module.exports = router;
