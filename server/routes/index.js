const router = require('express').Router();

const { deleteCartProduct } = require('../controllers/cart');
const { getCategories } = require('../controllers/categories');
const { getProducts, getProductData } = require('../controllers/products');

router.get('/products', getProducts);
router.get('/products/:id', getProductData);

router.get('/categories', getCategories);

router.delete('/cart/:productId', deleteCartProduct);

module.exports = router;
