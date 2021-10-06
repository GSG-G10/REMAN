const { deleteCartProductQuery } = require('../../database/queries/cart');

const deleteCartProduct = (req, res) => {
  const userId = 1; // req.user.id;
  const { productId } = req.params;

  deleteCartProductQuery(userId, productId)
    .then((data) => res.json(data.rows))
    .catch(() => res.json({ status: 500, msg: 'Server Error !' }));
};

module.exports = deleteCartProduct;
