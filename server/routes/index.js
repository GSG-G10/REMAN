const router = require('express').Router();

const {signup} = require('../controllers');
const { getProductByCId } = require('../controllers/getProductsByCId');


router.post('/register', signup);

router.get('categories/', getProductByCId)
router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

module.exports = router;
