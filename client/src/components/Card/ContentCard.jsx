import { Card, Rate } from 'antd';
import { Link } from 'react-router-dom';
import PurchaseBtn from './PurchaseBtn';

const { Meta } = Card;

const ContentCard = ({
  // eslint-disable-next-line react/prop-types
  title, rate, price, productId,
}) => (
  <div className="content-card">
    <Link to={`/products/${productId}`}>
      <Meta title={title} />
    </Link>
    <Rate allowHalf defaultValue={rate} />
    <div className="card-btns-price">
      <p className="price">
        {price}
        {' '}
        $
      </p>
      <div className="btns">
        <PurchaseBtn productId={productId} />
      </div>
    </div>
  </div>
);

export default ContentCard;
