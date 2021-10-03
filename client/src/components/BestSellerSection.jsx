import React from 'react';
import ProductCard from './Card/ProductCard';
import '../home.css';

const BestSellerSection = () => {
  return (
    <div className='best-seller-section'>
        <h2 className='title-section'>Best Seller</h2>
      <div className="seller">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default BestSellerSection;
