const router = require('express').Router();

const {signup} = require('../controllers')


router.get('/register', signup);
router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

module.exports = router;
