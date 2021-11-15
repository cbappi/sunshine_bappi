import React from "react";
import { Spinner } from "react-bootstrap";
import useFirebase from "../../hooks/useFirebase";
import Facilities from "../Facilities/Facilities";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProductsShort from "../ProductsShort/ProductsShort";
import Reviews from "../Reviews/Reviews";


import SpecialPackage from "../SpecialPackage/SpecialPackage";


const Home = () => {
  const { isLoading } = useFirebase();
  if (isLoading) {
    return <Spinner animation="border" variant="success" />
  }
  return (
    <div>
      <Header></Header>
      <ProductsShort></ProductsShort>
      
      <Reviews></Reviews>
      <Facilities></Facilities>



      <Footer></Footer>
    </div>
  );
};

export default Home;
