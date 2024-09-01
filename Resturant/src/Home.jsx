import React from 'react';
import { Outlet } from 'react-router';
import FoodRecepie from './Bpages/FoodRecepie';
import { BackCard } from './Components/BackCard';

const Home = () => {
  return (
    <div>
      <FoodRecepie />
      {/* <BackCard />
      <div className=''>

      </div>

      <Outlet /> */}


    </div>
  );
}

export default Home;
