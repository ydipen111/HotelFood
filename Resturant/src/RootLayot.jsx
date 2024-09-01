import React from 'react';
import { NavbarWithMegaMenu } from './Bpages/NavBar';
import { Outlet } from 'react-router-dom';

const RootLayot = () => {
  return (
    <div>
      <NavbarWithMegaMenu />
      <Outlet />
    </div>
  );
}

export default RootLayot;
