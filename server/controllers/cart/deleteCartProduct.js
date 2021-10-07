const { deleteCartProductQuery } = require('../../database/queries/cart');

const deleteCartProduct = (req, res) => {
  const { userId } = req;
  const { productId } = req.params;

  deleteCartProductQuery(userId, productId)
    .then((data) => res.json(data.rows))
    .catch(() => res.json({ status: 500, msg: 'Server Error !' }));
};

module.exports = deleteCartProduct;
