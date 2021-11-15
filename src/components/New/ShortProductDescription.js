import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';


const ShortProductDescription = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-dusk-85739.herokuapp.com/addproduct')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    //Apply Destructuring 

    const { img, product_name, description, _id } = props.product || {}




    return (

        <div className="col-md-4">
            <div class="card mb-3" >

                <div>
                    <div className="card-body">

                        <div>
                            <img src={img} className="img-fluid" alt="..." />
                        </div>

                        <h3 class="card-title text-info"> {product_name}</h3>
                        <h5 class="card-title text-muted"> {description}</h5>




                        <Link to={`/booking/${_id}`}>
                            <button className="btn btn-success">Buy now</button>
                        </Link>



                    </div>
                </div>
            </div >

        </div >

    );
};

export default ShortProductDescription;