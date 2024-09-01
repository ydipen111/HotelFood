
import React from 'react';
import Cardlist from './Bpages/FoodRecipecard';
import EcommerceCard from './Components/ProductCard';
import RootLayot from './RootLayot';
import ProductCard from './Components/ProductCard';
import Home from './Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
        path: 'listCard',
        element: <EcommerceCard />
      }
    ]

  }])


  return <RouterProvider router={router} />
}

export default App;
