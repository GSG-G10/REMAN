import React from 'react';
import { ShoppingCartOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

import postProductToCart from './purchaseRequest';

const PurchaseBtn = ({ productId, quantity }) => {
  return (
    <div className='buttons'>
      {!quantity ? (
        <ShoppingCartOutlined
          className="icon-shopping"
          onClick={() => {
            postProductToCart(1, productId);
          }}
        />
      ) : (
        <>
          <div className='button-change'>
            <CaretUpOutlined className='change'/>
            <CaretDownOutlined className='change'/>
          </div>
          <ShoppingCartOutlined
            className="icon-shopping"
          />
        </>
      )}
    </div>
  );
};

export default PurchaseBtn;
