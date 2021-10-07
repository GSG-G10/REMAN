import { Card, Rate } from 'antd';
import PurchaseBtn from './PurchaseBtn';

import { Link } from 'react-router-dom';
const { Meta } = Card;


const ContentCard = ({ title, rate, price, productId }) => {
  return (
    <div className="content-card">
      <Link to={`/products/${productId}`}>
        <Meta title={title} />
      </Link>
      <Rate allowHalf defaultValue={rate} />
      <div className="card-btns-price">
        <p className="price">{price} $</p>
        <div className="btns">
          <PurchaseBtn productId={productId} />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
