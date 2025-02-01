import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import "./somecss.css";
import Gif  from "../assets/Make It Rain Fun Sticker by Clash.gif";
import { Link } from 'react-router-dom';

const Select = () => {
  return (
    <section className="">
      <div className="container">
        <div className="row justify-content-center mb-16">
          {/* <h1>Bienvenue sur WeShare</h1> */}
          <div class="col-3">
            <img src={Gif} alt="cash"></img>
          </div>
        </div>
        <div className="row row-cols-2 justify-center column-gap-5">
          <div className="col-3 p-3 sus shadow-lg rounded">
            <div className="row justify-center p-3 mb-3">
              <span className="icon">
                <FontAwesomeIcon icon={faCoins} />
              </span>
            </div>
            <h3 className="m-3">Get Funds</h3>
            <p>Sign up and try to get a donation for your project. </p>
            <Link to="/ong">
              <button className="bt mt-3">Sign up</button>
            </Link>
          </div>
          <div className="col-3 sus shadow-lg rounded">
            <div className="row justify-center p-3 mb-4">
              <span className="icon">
                <FontAwesomeIcon icon={faHandHoldingDollar} />
              </span>
            </div>
            <h3 className="m-3">Make a Donation</h3>
            <p>
              Register and make a donation to help a project come to fruition
            </p>
            <Link to="/register">
              <button className=" bt mt-3">Sign up</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Select;
