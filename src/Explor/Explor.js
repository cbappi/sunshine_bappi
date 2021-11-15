import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Explor.css';


const Explor = ({ explor }) => {

    const [explors, setExplors] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-dusk-85739.herokuapp.com/explors')
            .then(res => res.json())
            .then(data => setExplors(data));
    }, []);

    //Apply Destructuring 

    const { img, product_name, description,price ,_id} = explor || {}


    

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
                  
                        <h5 class="card-title text-danger">Price : ${price}</h5>

                        <Link to={`/booking-explore/${_id}`}>
                            <button className="btn btn-success">Buy now</button>
                        </Link>

                      



                    </div>
                </div>
            </div >

        </div >

    );
};

export default Explor;