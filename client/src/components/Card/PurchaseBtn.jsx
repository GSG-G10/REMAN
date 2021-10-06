import React from 'react';
import { ShoppingOutlined, ShoppingFilled } from '@ant-design/icons';

import postProductToCart from './purchaseRequest';

const PurchaseBtn = ({ productId, quantity }) => {
  return (
    <div>
      {quantity ? (
        <ShoppingFilled
          className="icon icon-shopping"
          onClick={() => {
            postProductToCart(0, productId);
          }}
        />
      ) : (
        <ShoppingOutlined
          className="icon icon-shopping"
          onClick={() => {
            postProductToCart(1, productId);
          }}
        />
      )}
    </div>
  );
};

export default PurchaseBtn;
