import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getItems } from '../AData/url.js';
import ProductDataa from './ProductDataa';
import { useParams } from 'react-router';
import { ProductDetailsCard } from './ProductDetailsCard';

const ProductDetails = () => {

  const { category } = useParams();
  const [product, setProduct] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(getItems, {
        params: {
          c: category
        }
      });
      console.log(response.data);
      setProduct(response.data);


    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    getData();

  }, []);
  console.log(product);


  return (
    <div className='grid grid-cols-4 gap-4 h-[20rem]'>
      {product && product.meals?.map((meal) => {
        return <ProductDetailsCard key={meal.idmeal} meal={meal} />
      })}


    </div>
  );
}

export default ProductDetails;
