import { Container, Grid } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom'
import Users from '../../../users/components/Users';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import StickyFooter from './StickyFooter';


export default function Layout() {
  return (
    <div>
      <PrimarySearchAppBar />
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Grid>
        <Grid item xs={2}>
          <Users />
        </Grid>
      </Grid>
      <StickyFooter />
    </div >
  );
}
