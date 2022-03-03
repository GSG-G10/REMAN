/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Card, InputNumber } from 'antd';
import Img from '../components/common/Img';
import 'antd/dist/antd.min.css';

function CartCard({ product }) {
  const {
    image, price, qunatity, name,
  } = product;
  const [productNumber, setProductNumber] = useState(1);
  const [productPrice, setProductPrice] = useState(price);
  function onChange(value) {
    setProductNumber(value);
  }
  useEffect(() => {
    setProductPrice(price * productNumber);
  }, [productNumber]);
  return (
    <Card className="cart-card">
      <span style={{ width: '150px' }}>
        {name}
      </span>
      <Img src={image} alt="product" imgClass="card-image" />
      <InputNumber min={1} max={10} defaultValue={productNumber} onChange={(e) => onChange(e)} style={{ height: '35px' }} />
      <span>
        price :
        {productPrice}
      </span>
    </Card>
  );
}

export default CartCard;
