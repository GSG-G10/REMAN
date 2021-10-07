import axios from 'axios';

const postProductToCart = (quantityOfProduct, productId) => {
  axios
    .post('/cart', {
      quantity: quantityOfProduct,
      productId:  productId,
    })
    .then((data) => data.json());
};

export default postProductToCart;
