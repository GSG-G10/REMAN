import { Card, Rate } from 'antd';
import PurchaseBtn from './PurchaseBtn';
import LikeBtn from './LikeBtn';
const { Meta } = Card;

const ContentCard = ({ title, rate, price, productId, quantity }) => {
  return (
    <div className="content-card">
      <Meta title={title} />
      <Rate allowHalf defaultValue={rate} />
      <div className="card-btns-price">
        <p className="price">{price} $</p>
        <div className="btns">
          <PurchaseBtn productId={productId} quantity={quantity} />
          <LikeBtn />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
