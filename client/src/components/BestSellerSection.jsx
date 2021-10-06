import React, { useContext } from 'react';
import ProductCard from './Card/ProductCard';
import '../home.css';
import DataContext from '../Utils/DataContext';

const BestSellerSection = () => {
  const data = useContext(DataContext)
  console.log(data)
  return (
    <div className="best-seller-section">
      <h2 className="title-section">Best Seller</h2>

      <div className="seller">
        {/* {products &&
          products.map((card) => <ProductCard key={card.id} card={card} />)} */}
      </div>
    </div>
  );
};

export default BestSellerSection;
