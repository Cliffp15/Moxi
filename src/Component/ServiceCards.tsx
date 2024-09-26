import React from "react";

interface ServiceCardsProps {
  header: string;
  paragraph: string;
  image: string;
}

const ServiceCards: React.FC<ServiceCardsProps> = ({ header, paragraph, image }) => {
  return (
    // (image = lemon)
    <div>
      <section className="Service-Card-Section">
        <div className=" Container">
          <div className="Service-Card">
            <div className="Service-Description">
              <h2>
                {header} <br></br>
              </h2>
              {/* <hr></hr> */}
              <p>{paragraph} </p>
              <div className="Service-Card-Buttons">
                <div>
                  <button>
                    Get Started <span className="arrow">&#8594;</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="Service-Card-Image">
              <img className="Service-img" src={image} alt="dog" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCards;
