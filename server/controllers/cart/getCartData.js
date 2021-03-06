const { getCartProducts } = require('../../database/queries/cart');

const getCartData = (req, res) => {
  const { userId } = req;
  getCartProducts(userId)
    .then((data) => res.json(data.rows))
    .catch(() => res.status(500).json({ status: 500, msg: 'Server Error' }));
};
module.exports = getCartData;
