import React from "react";
import lemon from "../Images/Lemon.png";

const ServiceCards = ({ header, paragraph, image }) => {
  return (
    (image = lemon),
    (
      <div>
        <section className="Service-Card-Container">
          <div className="Service-Card">
            <div className="Service-Description">
              <h2>
                {header} <br></br>
              </h2>
              <hr></hr>
              <p>{paragraph} </p>
              <div className="Service-Card-Buttons">
                <div>
                  <button>Get Started</button>
                </div>
              </div>
            </div>
            <div className="Service-Card-Image">
              <img className="Service-img" src={image} alt="dog" />
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default ServiceCards;
