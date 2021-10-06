const { addNewProductQuery } = require('../../database/queries');

const addNewProduct = (req, res) => {
  const {
    name, price, discount, url, category,
  } = req.body;
  addNewProductQuery(
    name, price, discount, url, category,
  ).then(res.json('Product added successfully'));
};
module.exports = addNewProduct;
