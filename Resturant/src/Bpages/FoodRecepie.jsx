import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { categoriesUrl } from '../AData/url';

const FoodRecepie = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(categoriesUrl);
      console.log(response.data.categories);
      setData(response.data.categories);
    } catch (error) {
      console.log("This is not found man", error);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data.map((items) => (
        <div key={items.x} className='space-y-3 mx-auto rounded-sm shadow-2xl px-3 gap-3 py-3'>

          <img src={items.strCategoryThumb} alt={items.strCategoryThumb} />

          <h1 className='text-2xl'>{items.strCategory}</h1>
          <p>{items.strCategoryDescription}</p>

        </div>

      )
      )}
    </div>
  );
}

export default FoodRecepie;