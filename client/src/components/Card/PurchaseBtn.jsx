import { ShoppingCartOutlined } from '@ant-design/icons';

import postProductToCart from './purchaseRequest';

// eslint-disable-next-line react/prop-types
const PurchaseBtn = ({ productId }) => (
  <div className="buttons">
    <ShoppingCartOutlined
      className="icon-shopping"
      onClick={() => {
        postProductToCart(1, productId);
      }}
    />
  </div>
);

export default PurchaseBtn;
