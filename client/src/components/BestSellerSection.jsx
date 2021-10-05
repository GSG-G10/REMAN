import React, { useEffect, useState } from 'react';
import ProductCard from './Card/ProductCard';
import '../home.css';

const BestSellerSection = () => {
  const [products, setProducts] = useState(null);

  useEffect(
    () => {
      //fetch to get data about products

    },[])

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
