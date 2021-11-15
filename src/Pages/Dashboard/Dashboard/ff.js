import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import useAuth from './../../../hooks/useAuth';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import MyOrders from '../../../components/MyOrders/MyOrders';
import ManageAllOrders from '../../../components/ManageAllOrders/ManageAllOrders';
import AddReviews from '../../../components/AddReviews/AddReviews';
import ExploreProduct from '../../../ExploreProduct/ExploreProduct';
import ManageProducts from '../../../components/Manage Products/ManageProducts';

const drawerWidth = 200;

function Dashboard(props) {


    const { user, logout } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            
              <Toolbar />
            <Divider />
          
            
            <Button variant="contained" color="success" onClick={logout}>
                                Logout</Button>
                                
            <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>      
                        

            <Link to={`${url}/myorders`}><Button color="inherit">My Orders</Button></Link>
            <Link to={`${url}/addreviews`}><Button color="inherit">Add Reviews</Button></Link>

            <Link to={`${url}/payment`}><Button color="inherit">Payment Option</Button></Link>

            
         

            
            {admin && <Box>

            <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
            <Link to={`${url}/manageallorders`}><Button color="inherit">Manage All Orders</Button></Link>
            <Link to={`${url}/exploreproduct`}><Button color="inherit">Add a Product</Button></Link>
            <Link to={`${url}/manageproducts`}><Button color="inherit">Manage Products</Button></Link>
        


            </Box>}

            

                
            <div  className="col">                  
                        <Link to={`/home`}>
                            <button className="btn btn-success">Home</button>
                        </Link>
                        </div>
        </div>
       
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
       
            
   
        <Box sx={{ display: 'flex' }}>
                
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    
                    <AdminRoute path={`${path}/manageallorders`}>
                    <ManageAllOrders />
                    </AdminRoute>
                    
                    <AdminRoute path={`${path}/exploreproduct`}>
                    <ExploreProduct />
                    </AdminRoute>
                    
                    <AdminRoute path={`${path}/manageproducts`}>
                    <ManageProducts />
                    </AdminRoute>

                     
                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/addreviews`}>
                        <AddReviews></AddReviews>
                    </Route>
                    
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                
                   
                </Switch>

            </Box>
        </Box>
        
    );
  
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;
