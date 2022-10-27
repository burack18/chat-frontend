import React from 'react'
import { Outlet } from 'react-router-dom'
import StickyFooter from './StickyFooter';

export default function Layout() {
  return(
    <div>Layout
        <Outlet/>

        <StickyFooter/>
    </div>
  );
}
