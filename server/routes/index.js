const router = require('express').Router();

const {
  getProducts, getProductData, addToCart, addNewProduct,
} = require('../controllers/products');
const { checkAuth } = require('../middlewares');

const { deleteCartProduct } = require('../controllers/cart');
const { getCategories } = require('../controllers/categories');
const { signup } = require('../controllers');
const { getProductByCId } = require('../controllers/getProductsByCId');

router.get('categories/:categoryId/products', getProductByCId);
router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

router.get('/products', getProducts);
router.get('/products/:id', getProductData);
router.get('/categories', getCategories);

router.post('/register', signup);
router.post('/cart', checkAuth, addToCart);
router.post('/add-new-product', addNewProduct);

router.delete('/cart/:productId', deleteCartProduct);

module.exports = router;
