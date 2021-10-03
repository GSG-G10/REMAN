import { Card, Rate } from 'antd';
import PurchaseBtn from './PurchaseBtn';
import LikeBtn from './LikeBtn';

const { Meta } = Card;

const ContentCard = () => {
  return (
    <div className="content-card">
      <Meta title="Langue Stack Chair" />
      <Rate allowHalf defaultValue={4.5} />
      <div className="card-btns-price">
        <p className="price">29$</p>
        <div className="btns">
          <PurchaseBtn />
          <LikeBtn />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
