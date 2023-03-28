import React, { useState } from "react";
import './AccordionSmall.scss';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
      <div className="accordion-section-small">
        <div className="accordion-header-small" onClick={handleClick}>
          <h4>{title}</h4>
          <span>{isOpen ? "▲" : "▼"}</span>
        </div>
        {isOpen && <div className="accordion-content">{content}</div>}
      </div>
  );
}

export default Accordion;
