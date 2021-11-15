import React, { useEffect, useState } from "react";
import "./ProductsShort.css";

import ShortProductDescription from "../New/ShortProductDescription";

const ProductsShort = () => {
  // Declare State
  const [productsshort, setProductsShort] = useState([]);


  useEffect(() => {
    fetch('https://mysterious-dusk-85739.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setProductsShort(data));
  }, []);

  return (
    <div>
      <div className="container-fluid backgroundimg">
      <div className="container">
        <h1 className="py-5 text-white">Our Exclusive Products </h1>
        <div className="row">
          <div className="col-md-12">


            <div className="row">


              {
                //Apply Map Function
                productsshort.map(product =>
                  <ShortProductDescription
                    key={product.id}
                    product={product}
                    

                  >

                  </ShortProductDescription>)
              }


            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductsShort;
