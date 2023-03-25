import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

//Components
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import BenifitsCard from "../../components/benifits-card/BenifitsCard";
import { BrowserRouter as Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./HomePage.scss";

//images
import freeConsult from "../../assets/freeConsult.svg";
import shipping from "../../assets/shipping.svg";
import hearBack from "../../assets/hearBack.svg";
import icon from "../../assets/Icon.svg";
import halfBottle1 from "../../assets/Mask Group 3.svg";
import drMen from "../../assets/drMen.svg";
import cialis from "../../assets/cialis.svg";
import Sildenafil from "../../assets/bottle-design-Tadalafil1.svg";
import Footer from "../../components/Footer/Footer";
import Faqs from "../../components/Faqs/Faqs";

const HomePage = () => {
  return (
    <div className="HomePagecontainer">
      <div className="hero_section">
        <div className="container width-component">
          <Navbar />
          <Hero />
        </div>
      </div>
      {/* Benifits Section */}
      <div className="benifits-container width-component container display-flex">
        <BenifitsCard
          title="FREE Consulatation"
          desc="Answer a few questions about your health history and symptoms."
          img={freeConsult}
        />
        <BenifitsCard
          title="Hear back in 24 hours"
          desc="Our healthcare professionals will review your condition and get back to you."
          img={hearBack}
        />
        <BenifitsCard
          title="Fast and free shipping"
          desc="You will receive your order in a discreet, unmarked package SHIPPED FREE."
          img={shipping}
        />
      </div>
      {/* Get Treatment Section */}
      <div className="get-treatment-container container width-component">
        <h1 className="text-center">Get the best treatment you need</h1>
        <p className="lead text-center">
          Five Corners Rx provides various treatment options suitable for your
          finances and daily routine.
        </p>
        <div className="treatment-offers-container">
          <div className="treatment-offers-box">
            <p className="offers-p1">Sildenafil Citrate</p>
            <h5>Generic Viagra</h5>
            <p className="offers-p2">Begins at $3 per pill</p>
            <Link href="#">
              <Button className="Free-Consult-link">
                Start Now
                <img
                  className="Free-Consult-rightArrow"
                  src={icon}
                  alt="arrow"
                />
              </Button>
            </Link>
            <img src={halfBottle1} alt="" />
          </div>
          <div className="treatment-offers-box">
            <p className="offers-p1">Sildenafil Citrate</p>
            <h5>Generic Viagra</h5>
            <p className="offers-p2">Begins at $3 per pill</p>
            <Link href="#">
              <Button className="Free-Consult-link">
                Start Now{" "}
                <img
                  className="Free-Consult-rightArrow"
                  src={icon}
                  alt="arrow"
                />{" "}
              </Button>
            </Link>
            <img src={halfBottle1} alt="" />
          </div>
        </div>
      </div>
      {/* Treatment Option */}
      <div className="treatment-option-container">
        <div className="container width-component d-flex">
          <div className="treatment-option-text-container">
            <h2>
              Which Treatment Option
              <br /> Suits You Best?
            </h2>
            <p className="lead">
              Our top priority is giving you the best results. Simply select
              your preferred treatment option, and our team of certified
              American doctors will find the best approach for your needs.
            </p>
            <Link href="#">
              <Button className="Free-Consult-link">
                Start Now
                <img
                  className="Free-Consult-rightArrow"
                  src={icon}
                  alt="arrow"
                />
              </Button>
            </Link>
          </div>
          <div className="treatment-option-img-container">
            <img src={drMen} alt="" />
          </div>
        </div>
      </div>
      {/* FAQS */}
      <Faqs />
      {/* FAQS */}
      {/* Get Ready */}
      <div className="getReady-container">
        <div className="getReady-section container width-component">
          <div className="getReady-img-container">
            <div className="getReady-img-box">
              <img
                src={Sildenafil}
                className="getReady-viagra"
                alt="get ready"
              />
            </div>
            <div className="getReady-img-box">
              <img
                src={cialis}
                alt="get ready"
                className="getReady-cialis"
                width="350px"
                height="350px"
              />
            </div>
          </div>
          <div className="getReady-txt-container">
            <h2>Ready to get started?</h2>
            <h5>Try Five Corners Rx's ED pills for real satisfaction!</h5>
            <p>
              Say goodbye to ED with Five Corners Rx Don't let ED control your
              life any longer. With safe, effective, and trusted ED pills, you
              can regain your youthful drive and vigor in the bedroom. For more
              than 20 years, men have trusted ED pills to extend their sexual
              prime, and now it's your turn.
            </p>
            <Link href="#">
              <Button className="Free-Consult-link">
                Start Now
                <img
                  className="Free-Consult-rightArrow mx-2"
                  src={icon}
                  alt="arrow"
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
