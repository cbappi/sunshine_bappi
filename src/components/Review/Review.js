import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

//import './Product.css';


const Review = ({ review }) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-dusk-85739.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    //Apply Destructuring 

    const { img, product_name, review_des,star } = review || {}


    

    return (

        <div className="col-md-4">
            <div class="card mb-3" >

                <div>
                    <div className="card-body">

                        <div>
                            <img src={img} className="img-fluid" alt="..." />
                        </div>

                        <h3 class="card-title text-info"> {product_name}</h3>
                        <h5 class="card-title text-muted"> {review_des}</h5>
                        <h5 class="card-title text-muted">Rating
                        <Rating
                            initialRating={star}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                        />
                        </h5>
                  
                        

                      



                    </div>
                </div>
            </div >

        </div >

    );
};

export default Review;