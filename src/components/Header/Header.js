import React from "react";
import { Link } from "react-router-dom";
import Nave from "../Nav/Nave";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <Nave></Nave>
      <div className="container-fluid header-area ">

        <div className="">
          <div className="row d-flex header-area align-items-center justify-content-center">

            <div className="col-md-6">
              <h2 className="text-start ps-5 text-white">
                PRIME CAR SALES AND <br />AND SERVICING CENTER
              </h2>
              <p className="text-white text-start ps-5 mt-3">
              We not only sell cars but also provide documentation facilities, servicing facilities,installment facilities and we have largge team for serving online or hotline advise to our all customer. Cars need to be serviced
              </p>

              <Link to="explors" className="items">
                <button className="mt-3 btn btn-warning">Explore more</button>
              </Link>



            </div>
            <div className="col-md-6">


            </div>
          </div>
        </div>
      </div >
    </div>
  );
};

export default Header;
