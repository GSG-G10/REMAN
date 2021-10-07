const router = require('express').Router();

const {
  getProducts, getProductData, addToCart, addNewProduct,
} = require('../controllers/products');
const { checkAuth } = require('../middlewares');

const { deleteCartProduct } = require('../controllers/cart');
const { getCategories, checkCategoryId } = require('../controllers/categories');
const { signup } = require('../controllers');
const { getProductByCId } = require('../controllers/getProductsByCId');
const { login, createSession } = require('../controllers/registration');

router.post('/login', login, createSession);

router.post('/register', signup);

router.get('/products', getProducts);
router.get('/products/:id', getProductData);
router.get('/categories', getCategories);
router.get('/categories/:categoryId/products', getProductByCId);

router.post('/register', signup);
router.post('/cart', checkAuth, addToCart);
router.post('/add-new-product', checkCategoryId, addNewProduct);

router.delete('/cart/:productId', checkAuth, deleteCartProduct);

module.exports = router;
