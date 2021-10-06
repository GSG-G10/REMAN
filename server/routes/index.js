const router = require('express').Router();

<<<<<<< HEAD
=======
const { getProducts, getProductData, addToCart } = require('../controllers/products');
const { checkAuth } = require('../middlewares');

>>>>>>> ae82fec0c23f60fbefc8aed67b898237f28bfcf6
const { deleteCartProduct } = require('../controllers/cart');
const { getCategories } = require('../controllers/categories');
const { signup } = require('../controllers');
const { getProductByCId } = require('../controllers/getProductsByCId');
const { getProducts, getProductData } = require('../controllers/products');
const { login, createSession } = require('../controllers/registration');

router.post('/login', login, createSession);

router.post('/register', signup);


router.get('categories/:categoryId/products', getProductByCId);
router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

router.get('/products', getProducts);
router.get('/products/:id', getProductData);
router.get('/categories', getCategories);

router.post('/register', signup);
router.post('/cart', checkAuth, addToCart);

router.delete('/cart/:productId', deleteCartProduct);

module.exports = router;
