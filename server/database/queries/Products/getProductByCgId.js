const connection = require('../../config/connection');


const productByCategory = (cid) => {
    const sqlQuery = {
        text: 'SELECT * FROM products P INNER JOIN categories C on C.id = P.category_id WHERE C.id= $1',
        values: [cid] 
    }


    connection.query(productByCategory);
}


module.exports= {productByCategory};