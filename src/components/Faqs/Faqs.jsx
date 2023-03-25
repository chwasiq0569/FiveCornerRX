import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import "./Faqs.scss";

// import plusCircle from "../../assets/plus-circle.svg";

const Faqs = () => {
  return (
    <div className="faqs-container">
      <div className="faqs-section">
        <h1>Frequently Asked Questions</h1>
        <p>
          Do you have questions about our ED pills? We've got you covered! Check
          out our FAQ page for answers on
          <br /> our generic Viagra and Cialis, how effective and safe they are,
          and how our process works.
        </p>
        {/* <Faqs/> */}

        <div className="accordion">
          <MDBAccordion flush initialActive={1} className="accordionSection">
            <MDBAccordionItem
              className="accordionItem"
              collapseId={1}
              headerTitle="Is Generic Viagra as effective as Viagra?"
            >
              Yes! Generic Viagra contains the same active ingredient as
              brand-name Viagra and is just as effective in treating ED. In
              fact, the only difference is the price. Five Corners Rx's
              U.S.-based pharmacy ensures that our generic Viagra meets the same
              quality, safety, and efficacy standards as the brand-name version.
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
              U.S.-based pharmacy ensures that our generic Viagra meets the same
              quality, safety, and efficacy standards as the brand-name version.
            </MDBAccordionItem>
            <MDBAccordionItem
              className="accordionItem"
              collapseId={3}
              headerTitle="Do I need to be on a video call with a doctor?
"
            >
              Yes! Generic Viagra contains the same active ingredient as
              brand-name Viagra and is just as effective in treating ED. In
              fact, the only difference is the price. Five Corners Rx's
              U.S.-based pharmacy ensures that our generic Viagra meets the same
              quality, safety, and efficacy standards as the brand-name version.
            </MDBAccordionItem>
            <MDBAccordionItem
              className="accordionItem"
              collapseId={4}
              headerTitle="How safe are ED pills?
"
            >
              Yes! Generic Viagra contains the same active ingredient as
              brand-name Viagra and is just as effective in treating ED. In
              fact, the only difference is the price. Five Corners Rx's
              U.S.-based pharmacy ensures that our generic Viagra meets the same
              quality, safety, and efficacy standards as the brand-name version.
            </MDBAccordionItem>
            <MDBAccordionItem
              className="accordionItem"
              collapseId={5}
              headerTitle="Can I take more than the prescribed dosage?
"
            >
              Yes! Generic Viagra contains the same active ingredient as
              brand-name Viagra and is just as effective in treating ED. In
              fact, the only difference is the price. Five Corners Rx's
              U.S.-based pharmacy ensures that our generic Viagra meets the same
              quality, safety, and efficacy standards as the brand-name version.
            </MDBAccordionItem>
            <MDBAccordionItem
              className="accordionItem"
              collapseId={6}
              headerTitle="How can I get a refill of my ED pills?
"
            >
              Yes! Generic Viagra contains the same active ingredient as
              brand-name Viagra and is just as effective in treating ED. In
              fact, the only difference is the price. Five Corners Rx's
              U.S.-based pharmacy ensures that our generic Viagra meets the same
              quality, safety, and efficacy standards as the brand-name version.
            </MDBAccordionItem>
          </MDBAccordion>
        </div>
      </div>
    </div>
  );
};
export default Faqs;
