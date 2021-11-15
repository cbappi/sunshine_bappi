import React, { useEffect, useState } from "react";
//import "./Products.css";



import Review from "../Review/Review";

const Reviews = () => {
    // Declare State
    const [reviews, setReviews] = useState([]);



    useEffect(() => {
        fetch('https://mysterious-dusk-85739.herokuapp.com/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div>
      
            <div className="container">
                <h1 className="text-info py-5">Our Top Reviews</h1>
                <div className="row">
                    <div className="col-md-12">


                        <div className="row">


                            {
                                //Apply Map Function
                                reviews.map(review =>
                                    <Review
                                        key={review.id}

                                        review={review}


                                    >

                                    </Review>)
                            }


                        </div>
                    </div>

                </div>
            </div>
          
        </div>
    );
};

export default Reviews;
