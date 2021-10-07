const getCartProducts = require('../../database/queries/cart');

const getCartData = (req, res) => {
  getCartProducts(userId)
    .then((data) => res.json(data))
    .catch(() => res.status(500).json({ status: 500, msg: 'Server Error' }));
};
module.exports = getCartData;
