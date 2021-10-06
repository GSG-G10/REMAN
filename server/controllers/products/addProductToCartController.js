const { addToCartQuery } = require('../../database/queries/products');

const addToCart = (req, res) => {
  const { value } = req;
  addToCartQuery(value)
    .then(({ rows }) => res.status(201).json(rows.quantity))
    .catch((err) => res.status(500).json({ msg: `internal server error ${err}` }));
};

module.exports = addToCart;
