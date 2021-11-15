import React from "react";
import "./Footer.css";
import logo from "../../images/f/car-1.jpg";

import { Link } from "react-router-dom";
import FooterImageOne from "../FooterImageOne/FooterImageOne";
import FooterImageTwo from "../FooterImageTwo/FooterImageTwo";

const Footer = () => {
  return (
    <div>


      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">

              <h1 className="text-muted">PRIME CAR SALES AND SERVICE CENTER</h1>


              <p>Address: 1733 Fulton Ave, Sacramento, CA 958775, United States
              </p>
              <p>Email: info@primecarsales.com</p>
              <p>Phone: +1 438-430-2334

              </p>


            </div>

            <div className="container">
              <div className="row">
              <div className="col-md-12 text-center">

              <h1 className="text-muted">OUR UPCOMMING LUXARY MODELS</h1>
              </div>
              </div>

            </div>


            <div className="container">
              <div className="row">
                <div className="col-md-4 ">

                  <img  src={logo} alt="" height="250" width="360"/>


                </div>
                <div className="col-md-4 ">

                  <FooterImageOne></FooterImageOne>

                </div>
                <div className="col-md-4 ">
                  <FooterImageTwo></FooterImageTwo>



                </div>
                <div className="container text-white mt-3">
                  All the Right Reserved@ Prime Car Sales and Service Center
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>









  );
};

export default Footer;
