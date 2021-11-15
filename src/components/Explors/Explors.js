
import React, { useEffect, useState } from "react";




import Explor from "../../Explor/Explor";

const Explors = () => {
    // Declare State
    const [explors, setExplors] = useState([]);



    useEffect(() => {
        fetch('https://mysterious-dusk-85739.herokuapp.com/explors')
            .then((res) => res.json())
            .then((data) => setExplors(data));
    }, []);

    return (
        <div>
       
            <div className="container">
                <h1 className="text-info py-5">Explore Your Favourite Car</h1>
                <div className="row">
                    <div className="col-md-12">


                        <div className="row">


                            {
                                //Apply Map Function
                                explors.map(explor =>
                                    <Explor
                                        key={explor.id}

                                        explor={explor}


                                    >

                                    </Explor>)
                            }


                        </div>
                    </div>

                </div>
            </div>
           
        </div>
    );
};

export default Explors;
