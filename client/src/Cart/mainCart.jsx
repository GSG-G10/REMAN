import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;
import CartCard from './cartCards';
import './cart.css';
function MainCart() {
  return (
    <div className="main-cart">
      <Title level={4}>Shopping Cart</Title>
      <div className="cards">
      <CartCard/>
        
      </div>
    </div>
  );
}

export default MainCart;
