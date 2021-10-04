import { Card, Rate } from 'antd';
import PurchaseBtn from './PurchaseBtn';
import LikeBtn from './LikeBtn';
const { Meta } = Card;

const ContentCard = ({ title, rate, price }) => {
  return (
    <div className="content-card">
      <Meta title={title} />
      <Rate allowHalf defaultValue={rate} />
      <div className="card-btns-price">
        <p className="price">{price} $</p>
        <div className="btns">
          <PurchaseBtn />
          <LikeBtn />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
