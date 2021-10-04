const {productByCategory} = require('../database/queries');



const getProductByCId = (req, res) => {
    const cid = req.query;

    productByCategory(cid)
    .then((data) => res.json(data))
    .catch(() => res.status(500).json({ status: 500, msg: 'Server Error' }));
};

module.exports = {getProductByCId};
