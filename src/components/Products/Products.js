import React, { useEffect, useState } from "react";
import "./Products.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Product from "../Product/Product";

const Products = () => {
    // Declare State
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch('https://mysterious-dusk-85739.herokuapp.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div>
            <Header></Header>
            <div className="container">
                <h1 className="text-info py-5">Our All On Demand Services - {products.length}</h1>
                <div className="row">
                    <div className="col-md-12">


                        <div className="row">


                            {
                                //Apply Map Function
                                products.map(product =>
                                    <Product
                                        key={product.id}

                                        product={product}


                                    >

                                    </Product>)
                            }


                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Products;
