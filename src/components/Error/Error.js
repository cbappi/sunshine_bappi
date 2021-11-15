import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MenuBar from "../Nav/Nave";
import "./Error.css";

const Error = () => {
  return (
    <div className="bac-ground">
      <Header></Header>


      <h1 className="text-grey p-5">Page not found error 404 !!!</h1>
      <Footer></Footer>
    </div>
  );
};

export default Error;
