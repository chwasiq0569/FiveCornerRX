import React from 'react';
import "./BenifitsCard.scss";
// import { BrowserRouter as Link } from "react-router-dom";

const benifitsCard = ({title, desc, img}) => {
  return (
    <>
       <div className="col-lg-4 benifitsCard">
          <img className="" width="50px" height="50px" src={img} alt="Card" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {desc}
            </p>
          </div>
        </div>
    </>
  )
}

export default benifitsCard;
