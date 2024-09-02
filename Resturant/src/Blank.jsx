import React from 'react';
import { Outlet } from 'react-router';

const Blank = () => {
  const data = [
    {
      id: 1,
      name: 'name',
      image: 'image',
      description: 'description',
    },
    {
      id: 2,
      name: 'name',
      image: 'image',
      description: 'description',
    }
  ];
  return (
    <div>
      {
        data.map((items) => {
          return <div>
            <h1>{items.id}</h1>,
            <h2>{items.image}</h2>
            <p>{items.description}</p>
          </div>
        })
      }


    </div>
  );
}

export default Blank;
