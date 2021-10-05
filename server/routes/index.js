const router = require('express').Router();

const { getProducts, getProductData } = require('../controllers/products');
const { checkAuth } = require('../middlewares');

router.get('/products', getProducts);
router.get('/products/:id', getProductData);

router.post('/addtocart', checkAuth);

module.exports = router;
