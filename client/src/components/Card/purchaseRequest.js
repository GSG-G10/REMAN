import { message } from 'antd';
import axios from 'axios';

const postProductToCart = (quantityOfProduct, productId) => {
  axios
    .post('/cart', {
      quantity: quantityOfProduct,
      productId,
    })
    .then((data) => data.data)
    .then(() => {
      message.success('product added to cart successfully !');
    });
};

export default postProductToCart;
