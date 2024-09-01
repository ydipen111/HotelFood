import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { categoriesUrl } from '../AData/url.js';
import FoodRecipecard from './FoodRecipecard.jsx';
import { Outlet } from 'react-router';

const FoodRecepie = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(categoriesUrl);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
    }
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      {data && <FoodRecipecard categories={data.categories} />}

      {/* {data.map((items) => (
        <div key={items.x} className='space-y-3 mx-auto rounded-sm shadow-2xl px-3 gap-3 py-3'>

          <img src={items.strCategoryThumb} alt={items.strCategoryThumb} />

          <h1 className='text-2xl'>{items.strCategory}</h1>
          <p>{items.strCategoryDescription}</p>

        </div>

      )
      )}
      <h1>hello worldddd</h1> */}



    </div>

  );
}


export default FoodRecepie;