import { Container } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom'
import PrimarySearchAppBar from './PrimarySearchAppBar';
import StickyFooter from './StickyFooter';

export default function Layout() {
  return (
    <div>
      <PrimarySearchAppBar />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
      <StickyFooter />
    </div>
  );
}
