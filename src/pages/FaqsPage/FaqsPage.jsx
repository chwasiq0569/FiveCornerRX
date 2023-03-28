import React from "react";
// import { BrowserRouter as Link } from 'react-router-dom';
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import "./FaqsPage.scss";

// import Hero from "../../components/Hero/Hero";
import NavbarLight from "../../components/NavbarLight/NavbarLight";
import Footer from "../../components/Footer/Footer";
import Accordion from "../../components/Accordion/Accordion";
import AccordionSmall from "../../components/AccordionSmall/AccordionSmall";

const FaqsPage = () => {
  return (
    <div className="HomePagecontainer">
      <div className="hero_sectionFaqsPage">
        <div className="container width-component">
          <NavbarLight />
          <div className="faqHero order">
            <h1>FAQS</h1>
            <h6>
              Welcome to Five Corners Rx's Frequently Asked Questions, where we
              provide answers to your inquiries about our services and
              treatments.
            </h6>
          </div>
        </div>
      </div>
      <div className="FaqsPage-container">
        <div className="FaqsPage-section width-component d-flex col-lg-12">
          {/* small faqs */}
          <div className="accordion a-small col-lg-4 mr-5">
            <AccordionSmall
              title="About FiveCornerRx"
              content="There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don't look even
            slightly believable."
            />
            <AccordionSmall
              title="Our Services"
              content="There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don't look even
            slightly believable."
            />
            <AccordionSmall
              title="Treatments"
              content="There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don't look even
            slightly believable."
            />
            <AccordionSmall
              title="Delivery"
              content="There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don't look even
            slightly believable."
            />
          </div>
          {/* small faqs */}
          <div className="accordion a-large col-lg-8">
            <h4>About FiveCornerRX</h4>
            <div className="accordion-wrapper-faq">
              <Accordion
                title="How do Five Corner Rx consultations work?"
                content="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable."
              />
              <Accordion
                title="Do I need a prescription to use Five Corner Rx?"
                content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
              />
              <Accordion
                title="Do you provide the same medication as my local pharmacy?"
                content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
              />
              <Accordion
                title="Is the packaging discreet?"
                content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
              />
              <Accordion
                title="Will Rocket Rx appear on my bank statement?"
                content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
              />
              <Accordion
                title="Is this service confidential?"
                content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
              />
            </div>

            <h4 className="mtop-h4">Our Services</h4>
            <div className="accordion-wrapper-faq">
              <Accordion
                title="Do I need a prescription to buy from Five Corners Rx?"
                content="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable."
              />
              <Accordion
                title="Is my information secure?"
                content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
              />
              <Accordion
                title="How can I get a refill of my ED pills?"
                content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
              />
              <Accordion
                title="Which payment methods do you accept?"
                content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
              />
            </div>

            <h4 className="mtop-h4">Treatments</h4>
            <div className="accordion-wrapper-faq">
              <Accordion
                title="Are you wondering whether Generic Viagra is as effective as Viagra?"
                content="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable."
              />
              <Accordion
                title="Is Generic Cialis as effective as Cialis?"
                content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
              />
              <Accordion
                title="Do I need to be on a video call with a doctor?"
                content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
              />
              <Accordion
                title="How safe are ED pills?"
                content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
              />
              <Accordion
                title="Can I take more than the prescribed dosage?
"
                content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
              />
            </div>

            <h4 className="mtop-h4">Delivery</h4>
            <div className="accordion-wrapper-faq">
              <Accordion
                title="What are my delivery options?"
                content="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable."
              />
              <Accordion
                title="Which states do you deliver to?"
                content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="StillQuestion-container">
        <div className="StillQuestion-section text-center">
          <h1>Still got a question?</h1>
          <p>
            If you have more questions, you may send us an email at{" "}
            <strong>support@fivecornersrx.com</strong>
          </p>
          <p>
            You may also reach us through our toll-free hotline{" "}
            <strong>1-800-240-7624,</strong>
            <br />
            Monday- Sunday, 9 AM to 6 PM EST.
          </p>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
};

export default FaqsPage;
