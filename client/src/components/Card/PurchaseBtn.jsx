import React from 'react';
import { ShoppingOutlined, ShoppingFilled } from '@ant-design/icons';
const PurchaseBtn = () => {
  return (
    <div onClick={() => {}}>
      {false ? (
        <ShoppingOutlined className="icon icon-shopping" />
      ) : (
        <ShoppingFilled className="icon icon-shopping" />
      )}
    </div>
  );
};

export default PurchaseBtn;
