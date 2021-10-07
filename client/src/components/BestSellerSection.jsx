/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../home.css';
import ProductCard from './Card/ProductCard';

const BestSellerSection = ({ products }) => {
  const [cards, setCards] = useState(null);
  useEffect(() => {
    setCards(products);
  }, [products]);

  return (
    <div className="best-seller-section">
      <h2 className="title-section">Best Seller</h2>

      <div className="seller">
        {cards
          && cards.map((card) => <ProductCard key={card.id} card={card} />)}
      </div>
    </div>
  );
};

export default BestSellerSection;
