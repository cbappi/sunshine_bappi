import React from 'react';
import Installment from '../Installment/Installment';
import Servicing from '../Servicing/Servicing';
import Dox from '../Dox/Dox';
import Hotline from '../Hotline/Hotline';
import "./Facilities.css";

const Facilities = () => {
    return (
        <div>
            <div className="container-fluid backgroundpic py-5 ">
                <h1 className="text-center text-white mt-5 mb-5">Our Best Facilities</h1>

                <p className="fst-italic fw-normal text-white mb-5">We not only sell cars but also provide documentation facilities, servicing facilities,installment facilities and we have largge team for serving online or hotline advise to our all customer.
                Cars need to be serviced. ... Having the oil and filters changed at regular intervals prevents any dirt or dust getting into the engine's oily bits and may be causing major issues. It will also keep the engine's good and ultimately the car's overall l may running well.</p>
                <div className="container ">
                    <div className="row">
                        <Installment></Installment>
                        <Servicing></Servicing>
                        <Dox></Dox>
                        <Hotline></Hotline>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Facilities;