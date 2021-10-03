import React from 'react';
import { Card } from 'antd';
import './card.css';
import 'antd/dist/antd.min.css';
import ContentCard from './ContentCard';

const ProductCard = () => {
  return (
    <div className="card">
      <Card
        hoverable
        style={{ width: '100%', borderRadius: 4 }}
        cover={
          <img
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              backgroundOrigin: 'content-box',
            }}
            alt="example"
            src="https://www.aroma-zen.com//cache/images/images/products/47/2787/2787_lait_corporel_regenerant_a_la_grenade_200_ml_1.jpg.thumb_1000x800.jpg"
          />
        }
      >
        <ContentCard />
      </Card>
    </div>
  );
};

export default ProductCard;
