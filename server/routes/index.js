const router = require('express').Router();

const { getProducts, getProductData, addToCart } = require('../controllers/products');
const { checkAuth } = require('../middlewares');

const { deleteCartProduct } = require('../controllers/cart');
const { getCategories } = require('../controllers/categories');
const { signup } = require('../controllers');
const { getProductByCId } = require('../controllers/getProductsByCId');

router.get('/products', getProducts);
router.get('/products/:id', getProductData);
router.get('/categories', getCategories);
router.get('categories/:categoryId/products', getProductByCId);

router.post('/register', signup);
router.post('/cart', checkAuth, addToCart);

router.delete('/cart/:productId', deleteCartProduct);

module.exports = router;
