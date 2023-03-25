import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./HeroLight.scss";
import icon from "../../assets/Icon.svg";
import bottleDesign from "../../assets/bottle-design (1).svg";

const HeroLight = ({name}) => {
  return (
    <div className="container heroMain-container">
      <div className="row heroflex flex-direct display-flex justify-content-between align-items-center">
        <div className="order-2 hero-img-container display-flex justify-content-center align-items-center">
          <img className="hero-img" src={bottleDesign} alt="Hero" />
        </div>
        <div className="order-1 txt display-flex justify-content-right align-items-end">
          <div className="">
            <h1 className="homeHero-h1">Generic Viagra</h1>
            <h5>{name}</h5>
            <p className="lead">
              Get the Same Powerful Benefits at a Fraction of the Cost with
              Generic<br/> Viagra. Our FDA-approved medication contains the same
              active<br/> ingredient as Viagra, but is available at a fraction of the
              cost.
            </p>
            <Link href="#">
              <Button className="Free-Consult-link">
                Start FREE Consultation
                <img
                  className="Free-Consult-rightArrow"
                  src={icon}
                  alt="arrow"
                />{" "}
              </Button>
            </Link>
            <p className="safe-text-p">100% Safe. Verified. FDA-Approved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLight;
