import React from 'react';
import { Card } from 'antd';

import './card.css';
import 'antd/dist/antd.min.css';
import Img from '../common/Img';

import ContentCard from './ContentCard';

const ProductCard = ({ card }) => {
  const { name, image, price, rate } = card;
  return (
    <div className="card">
      <Card
        hoverable
        className="card-component"
        cover={<Img imgClass={'image-card-cover'} alt={name} src={image} />}
      >
        <ContentCard title={name} rate={rate} price={price} />
      </Card>
    </div>
  );
};

export default ProductCard;
