import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavbarLight from "../../components/NavbarLight/NavbarLight";
import Accordion from "../../components/Accordion/Accordion";
import "../TadalafilGeneric/TadalafilGeneric.scss";
// import "../HomePage/HomePage.scss";
// import Faqs from "../../components/Faqs/Faqs";
// import "../HowItsWork/HowItsWork.scss";

import tickVerified from "../../assets/tick-circle.svg";
import icon from "../../assets/Icon.svg";
import bg4 from "../../assets/bg4.svg";
import online1 from "../../assets/Icon (1).svg";
import online2 from "../../assets/Icon (2).svg";
import online3 from "../../assets/Icon (3).svg";

import Button from "react-bootstrap/Button";
import HeroLight from "../../components/HeroLight/HeroLight";

const TadalafilGeneric = () => {
  return (
    <div className="HomePagecontainer">
      <div className="hero_sectionTadalafilGeneric">
        <div className="container width-component">
          <NavbarLight />
          <HeroLight name="Tadalafil Generic" />
        </div>
      </div>
      {/* Verified Things */}
      <div className="benifitsBG">
        <div className="benifits-container width-component container display-flex py-5">
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <img
              className=""
              width="30px"
              height="30px"
              src={tickVerified}
              alt="Card"
            />
            <p className="card-text">Free, discreet 2-day shipping</p>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <img
              className=""
              width="30px"
              height="30px"
              src={tickVerified}
              alt="Card"
            />
            <p className="card-text">100% Safe. Verified. FDA-Approved.</p>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <img
              className=""
              width="30px"
              height="30px"
              src={tickVerified}
              alt="Card"
            />
            <p className="card-text">Prescribed by US medical experts</p>
          </div>
        </div>
      </div>
      {/* Verified Things */}
      {/* Proper Work Telling section */}
      <div className="mainWorkscontainer">
        <div className="mainWorkscontainer-box width-component d-flex">
          <div className="freeHealthImg">
            <img src={bg4} alt="" />
          </div>
          <div className="freeHealthtxt">
            <h2>Convenient. Secure. Affordable</h2>
            <p>
              At Five Corners Rx, we understand the hassle and expense of
              traditional doctor visits and pharmacy trips. That's why we've
              made it easy to order your medication completely online. Our quick
              and secure checkout process and health survey takes just minutes
              to complete, so you can get back to enjoying your life with
              confidence and peace of mind.
            </p>
            <Link href="#">
              <Button className="Free-Consult-link">
                Start FREE Consultation
                <img
                  className="Free-Consult-rightArrow mx-3"
                  src={icon}
                  alt="arrow"
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Proper Work Telling section */}
      {/* Affordable plan */}
      <div className="Affordable-container">
        <div className="Affordable-section width-component d-flex justigy-content-between align-items-center py-5">
          <div className="Affordable-left col-8">
            <h2>Transparent & Affordable Pricing for Plan</h2>
            <p>
              With Five Corners Rx, you only pay for what you need. Our
              straightforward pricing policy ensures there are no hidden fees or
              charges, so you can focus on what matters most. Choose your
              preferred treatment plan based on your individual needs and
              budget.
            </p>
            <Link href="#">
              <Button className="Free-Consult-link">
                Start FREE Consultation
                <img
                  className="Free-Consult-rightArrow mx-3"
                  src={icon}
                  alt="arrow"
                />
              </Button>
            </Link>
          </div>
          <div className="Affordable-right text-center bg-light col-3">
            <h6>Starter Package</h6>
            <div className="d-flex justify-content-center align-items-end text-center">
              <h1>$2</h1>
              <p>/Per Pill</p>
            </div>
            <h5>Available Varities</h5>
            <p>20mg to 100mg</p>
            <p>4, 8, 12 and 16 tablets</p>
          </div>
        </div>
      </div>
      {/* Affordable plan */}
      {/* Online Services */}
      <div className="OnlineServiceContainer">
        <div className="width-component">
          <h2 className="text-center">
            Easy Online Medicine For Men
            <br /> In 3 Quick Steps
          </h2>
          <div className="OnlineServiceBox-div d-flex">
            <div className="OnlineServiceBox col-lg-3 d-flex flex-column justify-content-center align-items-center text-center">
              <img src={online1} alt="" />
              <p>Step 1</p>
              <h6>Start online visit</h6>
              <p>
                Answer a few questions about your health history and symptoms.
              </p>
            </div>
            <div className="OnlineServiceBox col-lg-3 d-flex flex-column justify-content-center align-items-center text-center">
              <img src={online2} alt="" />
              <p>Step 2</p>
              <h6>Hear back in 24 hours</h6>
              <p>
                Our healthcare professionals will review your condition and get
                back to you.
              </p>
            </div>
            <div className="OnlineServiceBox col-lg-3 d-flex flex-column justify-content-center align-items-center text-center">
              <img src={online3} alt="" />
              <p>Step 3</p>
              <h6>Fast and free shipping</h6>
              <p>
                You will receive your order in a discreet, unmarked package
                SHIPPED FREE.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Online Services */}
      {/* FAQS Section */}
      <div className="accordion">
        <h1>Frequently Asked Questions</h1>
        <p>
          Do you have questions about our ED pills? We've got you covered! Check
          out our FAQ page for answers on
          <br /> our generic Viagra and Cialis, how effective and safe they are,
          and how our process works.
        </p>
        <div className="accordion-wrapper">
          <Accordion
            title="Is Generic Viagra as effective as Viagra?"
            content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. Five Corners Rx's U.S.-based pharmacy ensures that our generic Viagra meets the same quality, safety, and efficacy standards as the brand-name version."
            isOpen={true}
          />
          <Accordion
            title="Is Generic Cialis as effective as Cialis?"
            content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. "
          />
          <Accordion
            title="Do I need to be on a video call with a doctor?"
            content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. "
          />
          <Accordion
            title="How safe are ED pills?"
            content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. "
          />
          <Accordion
            title="Can I take more than the prescribed dosage?"
            content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. "
          />
          <Accordion
            title="How can I get a refill of my ED pills?"
            content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. "
          />
        </div>
      </div>
      {/* FAQS Section */}
      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
};

export default TadalafilGeneric;
