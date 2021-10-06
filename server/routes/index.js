const router = require('express').Router();

const { getCategories } = require('../controllers/categories');
const {signup} = require('../controllers');
const { getProductByCId } = require('../controllers/getProductsByCId');
const { getProducts, getProductData } = require('../controllers/products');


router.post('/register', signup);

router.get('categories/:categoryId/products', getProductByCId)
router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

router.get('/products', getProducts);
router.get('/products/:id', getProductData);

router.get('/categories', getCategories);

module.exports = router;
