import "./App.css";

import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import AboutUs from "./components/AboutUs/AboutUs";
import ProductDetail from "./components/ProductDetail/ProductDetail";


import Products from "./components/Products/Products";


import AddProduct from "./components/AddProduct/AddProduct";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import MyOrders from "./components/MyOrders/MyOrders";
import Order from "./components/Order/Order";
import Explors from "./components/Explors/Explors";


import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
//import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

import AddReviews from "./components/AddReviews/AddReviews";
import ProductDetailsExplore from "./components/ProductDetailsExplore/ProductDetailsExplore";


//Try to push again
function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            
            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/products">
              <Products></Products>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/booking/:id">
              <ProductDetail></ProductDetail>
            </PrivateRoute>
            <PrivateRoute path="/booking-explore/:id">
              <ProductDetailsExplore/>
            </PrivateRoute>

            <Route path="/addproduct">
              <Header />
              <AddProduct />
              <Footer></Footer>
            </Route>
        
            <Route path="/explors">
              <Header />
              <Explors />
              <Footer></Footer>
            </Route>
            <Route path="/addreviews">
              <Header />
              <AddReviews />
              <Footer></Footer>
            </Route>

            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>

            <PrivateRoute path="/manageallorders">
              <Header />
              <ManageAllOrders />
              </PrivateRoute>
      
            <PrivateRoute path="/myorders">
              <Header />
              <MyOrders />
              <Footer></Footer>
            </PrivateRoute>
        

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>

            



            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
