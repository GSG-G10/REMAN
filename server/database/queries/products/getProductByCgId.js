const connection = require('../../config/connection');

const productByCategory = (cid) => {
  const sqlQuery = {
    text: `SELECT P.id,
                  P.name,
                  P.price,
                  P.image,
                  P.rate,
                  P.category_id,
                  C.name as category
              FROM products P
                    INNER JOIN categories C on C.id = P.category_id
              WHERE C.id = $1
              ORDER BY P.id DESC
              LIMIT 4
       `,
    values: [cid],
  };

  return connection.query(sqlQuery);
};

module.exports = productByCategory;
