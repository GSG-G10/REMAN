import axios from 'axios';

const postProductToCart = (quantityOfProduct, productId) => {
  axios
    .post('/addtocart', {
      body: {
        quantity: quantityOfProduct,
        productId: productId,
      },
    })
    .then((data) => data.json());
};

export default postProductToCart;
