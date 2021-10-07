const { addNewProductQuery } = require('../../database/queries');

const addNewProduct = (req, res) => {
  const {
    name, price, discount, url, category,
  } = req.body;
  addNewProductQuery(name, price, discount, url, category)
    .then(res.json({ message: 'Product added successfully'}))
    .catch(() => res.status(500).json({ message: 'Server Error !' }));
};
module.exports = addNewProduct;
