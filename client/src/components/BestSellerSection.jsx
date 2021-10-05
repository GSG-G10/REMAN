import React, { useState } from 'react';
import ProductCard from './Card/ProductCard';
import '../home.css';

const BestSellerSection = () => {
  const [products, setProducts] = useState([
    {
      quantity: 0,
      name: 'example',
      id: 1,
      price: 29,
      rate: 4.5,
      image:
        'https://www.aroma-zen.com//cache/images/images/products/47/2787/2787_lait_corporel_regenerant_a_la_grenade_200_ml_1.jpg.thumb_1000x800.jpg',
    },
    {
      quantity: 1,
      name: 'example',
      id: 2,
      price: 29,
      rate: 4.5,
      image:
        'https://www.aroma-zen.com//cache/images/images/products/47/2787/2787_lait_corporel_regenerant_a_la_grenade_200_ml_1.jpg.thumb_1000x800.jpg',
    },
    {
      quantity: 0,
      name: 'example',
      id: 3,
      price: 29,
      rate: 4.5,
      image:
        'https://www.aroma-zen.com//cache/images/images/products/47/2787/2787_lait_corporel_regenerant_a_la_grenade_200_ml_1.jpg.thumb_1000x800.jpg',
    },
  ]);

  return (
    <div className="best-seller-section">
      <h2 className="title-section">Best Seller</h2>

      <div className="seller">
        {products &&
          products.map((card) => <ProductCard key={card.id} card={card} />)}
      </div>
    </div>
  );
};

export default BestSellerSection;
