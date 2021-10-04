const router = require('express').Router();

const { getProducts, getProductData } = require('../controllers/products');

router.get('/products', getProducts);
router.get('/products/:id', getProductData);

module.exports = router;
