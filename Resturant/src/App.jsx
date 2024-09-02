
import React from 'react';
import Cardlist from './Bpages/FoodRecipecard';
import EcommerceCard from './Components/ProductCard';
import RootLayot from './RootLayot';
import ProductCard from './Components/ProductCard';
import Home from './Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blank from './Blank';
import FoodRecepie from './Bpages/FoodRecepie';
import { ProductDetailsCard } from './Bpages/ProductDetailsCard';
import ItemDetail from './Bpages/Recepie/ItemDetail';
import ProductDetails from './Bpages/ProductDetails';
const App = () => {
  const router = createBrowserRouter([{
    path: '/',
    element: <RootLayot />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'blank',
        element: <Blank />
      },
      {
        path: 'home-page',
        element: <Home />
      },
      {
        path: 'profile',
        element: <FoodRecepie />
      },
      {
        path: 'item/:category',
        element: <ProductDetails />

      },
      {
        path: 'item=detail/:id',
        element: <ProductDetails />
      },
      {
        path: 'listCard',
        element: <EcommerceCard />
      }
    ]

  }])


  return <RouterProvider router={router} />
}

export default App;
