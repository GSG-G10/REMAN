import { useState } from 'react';
import DataContext from '../../Utils/DataContext';
import BestSellerSection from '../BestSellerSection';
import FilterProducts from '../FilterProducts';

const Main = () => {
  const [filterResult, setFilterResult] = useState();
  return (
    <DataContext.Provider value={filterResult}>
      <main className="main">
        <FilterProducts setFilterResult={setFilterResult} />
        <BestSellerSection />

      </main>
    </DataContext.Provider>
  );
};

export default Main;
