const router = require('express').Router();

const { getProducts, getProductData } = require('../controllers/products');
const { login, createSession } = require('../controllers/registration');

router.post('/login', login, createSession);
router.get('/products', getProducts);
router.get('/products/:id', getProductData);

module.exports = router;
