import { Card, Rate } from 'antd';
import PurchaseBtn from './PurchaseBtn';
const { Meta } = Card;

const ContentCard = ({ title, rate, price, productId }) => {
  return (
    <div className="content-card">
      <Meta title={title} />
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
