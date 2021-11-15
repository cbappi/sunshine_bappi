import * as React from 'react';
import MyOrders from '../../../components/MyOrders/MyOrders';
import Grid from '@mui/material/Grid';


const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
            <MyOrders></MyOrders>
            </Grid>
       
        </Grid>
    );
};

export default DashboardHome;