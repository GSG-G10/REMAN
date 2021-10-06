import React from 'react';
import {
  ShoppingCartOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';

import postProductToCart from './purchaseRequest';

const PurchaseBtn = ({ productId }) => {
  return (
    <div className="buttons">
      <ShoppingCartOutlined
        className="icon-shopping"
        onClick={() => {
          postProductToCart(1, productId);
        }}
      />
    </div>
  );
};

export default PurchaseBtn;
