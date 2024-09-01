import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { categoriesUrl } from '../AData/url';
import ProductDataa from './ProductDataa';

const ProductCard = () => {
  const [product, setProduct] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(categoriesUrl)
      console.log(response.data);
      setProduct(response.data);

    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    getData();

  }, []);

  return (
    <div>
      {
        product && <ProductDataa categories={product.categories} />
      }


    </div>
  );
}

export default ProductCard;
