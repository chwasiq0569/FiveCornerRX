import React from "react";
import { BrowserRouter as Link } from 'react-router-dom';
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import "./FaqsPage.scss";

// import Hero from "../../components/Hero/Hero";
import NavbarLight from "../../components/NavbarLight/NavbarLight";
import Footer from "../../components/Footer/Footer";

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
            <MDBAccordion flush className="accordionSection">
              <MDBAccordionItem
                className="accordionItem"
                collapseId={1}
                headerTitle="About FiveCornerRx"
              >
                Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version.
              </MDBAccordionItem>
              <MDBAccordionItem
                className="accordionItem"
                collapseId={2}
                headerTitle="Our Services"
              >
                Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version.
              </MDBAccordionItem>
              <MDBAccordionItem
                className="accordionItem"
                collapseId={3}
                headerTitle="Treatments"
              >
                Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version.
              </MDBAccordionItem>
              <MDBAccordionItem
                className="accordionItem"
                collapseId={4}
                headerTitle="Delivery"
              >
                Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version.
              </MDBAccordionItem>
            </MDBAccordion>
          </div>
          {/* small faqs */}
          <div className="accordion a-large col-lg-8">
            <h4>About FiveCornerRX</h4>
            <MDBAccordion flush initialActive={1} className="accordionSection">
              <MDBAccordionItem
                className="accordionItem"
                collapseId={1}
                headerTitle="How do Five Corner Rx consultations work?"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </MDBAccordionItem>
              <MDBAccordionItem
                className="accordionItem"
                collapseId={2}
                headerTitle="Do I need a prescription to use Five Corner Rx?"
              >
                Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version.
              </MDBAccordionItem>
              <MDBAccordionItem
                className="accordionItem"
                collapseId={3}
                headerTitle="Do you provide the same medication as my local pharmacy?"
              >
                Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version.
              </MDBAccordionItem>

              <MDBAccordionItem
                className="accordionItem"
                collapseId={4}
                headerTitle="Is the packaging discreet?"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </MDBAccordionItem>
              <MDBAccordionItem
                className="accordionItem"
                collapseId={5}
                headerTitle="Will Rocket Rx appear on my bank statement?"
              >
                Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version.
              </MDBAccordionItem>
              <MDBAccordionItem
                className="accordionItem"
                collapseId={6}
                headerTitle="Is this service confidential?"
              >
                Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version.
              </MDBAccordionItem>
            </MDBAccordion>

            <h4 className="mtop-h4">Our Services</h4>
            <MDBAccordion flush className="accordionSection">
              <MDBAccordionItem
                className="accordionItem"
                collapseId={1}
                headerTitle="Do I need a prescription to buy from Five Corners Rx?"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </MDBAccordionItem>
              <MDBAccordionItem
                className="accordionItem"
                collapseId={2}
                headerTitle="Is my information secure?"
              >
                Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version.
              </MDBAccordionItem>
              <MDBAccordionItem
                className="accordionItem"
                collapseId={3}
                headerTitle="How can I get a refill of my ED pills?"
              >
                Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version.
              </MDBAccordionItem>

              <MDBAccordionItem
                className="accordionItem"
                collapseId={4}
                headerTitle="Which payment methods do you accept?"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </MDBAccordionItem>
            </MDBAccordion>

            <h4 className="mtop-h4">Treatments</h4>
            <MDBAccordion flush className="accordionSection">
              <MDBAccordionItem
                className="accordionItem"
                collapseId={1}
                headerTitle="Are you wondering whether Generic Viagra is as effective as Viagra?
                "
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </MDBAccordionItem>
              <MDBAccordionItem
                className="accordionItem"
                collapseId={2}
                headerTitle="Is Generic Cialis as effective as Cialis?
                "
              >
                Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version.
              </MDBAccordionItem>
              <MDBAccordionItem
                className="accordionItem"
                collapseId={3}
                headerTitle="Do I need to be on a video call with a doctor?"
              >
                Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version.
              </MDBAccordionItem>

              <MDBAccordionItem
                className="accordionItem"
                collapseId={4}
                headerTitle="How safe are ED pills?"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </MDBAccordionItem>
              <MDBAccordionItem
                className="accordionItem"
                collapseId={5}
                headerTitle="Can I take more than the prescribed dosage?
                "
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </MDBAccordionItem>
            </MDBAccordion>

            <h4 className="mtop-h4">Delivery</h4>
            <MDBAccordion flush className="accordionSection">
              <MDBAccordionItem
                className="accordionItem"
                collapseId={1}
                headerTitle="What are my delivery options?"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </MDBAccordionItem>
              <MDBAccordionItem
                className="accordionItem"
                collapseId={2}
                headerTitle="Which states do you deliver to?"
              >
                Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version.
              </MDBAccordionItem>
            </MDBAccordion>
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
