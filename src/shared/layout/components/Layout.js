import React from 'react'
import { Outlet } from 'react-router-dom'
import PrimarySearchAppBar from './PrimarySearchAppBar';
import StickyFooter from './StickyFooter';

export default function Layout() {
  return (
    <div>
      <PrimarySearchAppBar />
      <Outlet />
      <StickyFooter />
    </div>
  );
}
