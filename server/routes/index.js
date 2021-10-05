const router = require('express').Router();

const {signup} = require('../controllers');
const { getProductByCId } = require('../controllers/getProductsByCId');
const { getProducts, getProductData } = require('../controllers/products');


router.post('/register', signup);

router.get('categories/:productId', getProductByCId)
router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

router.get('/products', getProducts);
router.get('/products/:id', getProductData);

module.exports = router;
