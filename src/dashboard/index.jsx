import { Box, Grid } from '@mui/material';
import OrderStatus from './order-status';
import Traffic from './traffic';
import Activities from './activities';
import Summary from './summary';
import { Card1, Card2, Card3, Card4 } from './cards';

export default function Dashboard() {
  return (
    <Grid container spacing={4} alignItems='stretch'>
      <Grid item xs={12} sm={8}>
        <Summary />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Traffic />
      </Grid>

      <Grid item xs={12} sm={3}>
        <Card1 />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card2 />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card3 />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card4 />
      </Grid>

      <Grid item xs={12} sm={4}>
        <Activities />
      </Grid>
      <Grid item xs={12} sm={8}>
        <OrderStatus />
      </Grid>
    </Grid>
  );
}
