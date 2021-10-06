import axios from 'axios';
import { useEffect, useState } from 'react';
import BestSellerSection from '../BestSellerSection';
import FilterProducts from '../FilterProducts';
import './style.css'


const Main = () => {
  const [filterResult, setFilterResult] = useState();

  return (
      <main className="main">
        <FilterProducts setFilterResult={setFilterResult} />
        <BestSellerSection products={filterResult} />

      </main>

  );
};

export default Main;
