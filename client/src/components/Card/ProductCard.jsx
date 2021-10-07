/* eslint-disable react/prop-types */
import { Card } from 'antd';

import './card.css';
import 'antd/dist/antd.min.css';
import Img from '../common/Img';

import ContentCard from './ContentCard';

const ProductCard = ({ card, style }) => {
  const {
    name, image, price, rate, id,
  } = card;

  return (
    <div className="card" style={style}>
      <Card
        hoverable
        className="card-component"
        cover={<Img imgClass="image-card-cover" alt={name} src={image} />}
      >
        <ContentCard title={name} rate={rate} price={price} productId={id} />
      </Card>
    </div>
  );
};

export default ProductCard;
