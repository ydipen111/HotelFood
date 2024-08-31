
import React from 'react';
import Cardlist from './Bpages/FoodRecipecard';
import EcommerceCard from './Components/ProductCard';
import RootLayot from './RootLayot';
import ProductCard from './Components/ProductCard';
import Home from './Home';
const App = () => {
  return (
    <div className='py-2 space-y-3'>
      <RootLayot />
      <Home />
    </div>
  );
}

export default App;
