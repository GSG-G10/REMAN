const router = require('express').Router();

const { getProductData } = require('../controllers');

router.get('/product/:id', getProductData);

module.exports = router;
