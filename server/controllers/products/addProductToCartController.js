const { addToCartQuery } = require('../../database/queries/products');

const addToCart = (req, res) => {
  const { productId, quantity } = req.body;
  const { userId } = req;

  addToCartQuery({ productId, quantity, userId })
    .then(({ rows }) => res.status(201).json({ data: rows.quantity }))
    .catch((err) => res.status(500).json({ msg: `internal server error ${err}` }));
};

module.exports = addToCart;
