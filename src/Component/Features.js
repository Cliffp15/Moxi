import React from "react";

import setup from "../Images/Productivity_Setup.jpg";
import food from "../Images/HealthyFood.jpg";
import career from "../Images/businesswoman-8676522.jpg";

const Features = () => {
  return (
    <div>
      <section className="Features-Section">
        <div className="Features-Container">
          <div className="Features-Description">
            <div className="Features-Title">
              <h2>
                Productivity <br></br> Website
              </h2>
            </div>
            <div className="Features-Break">
              <hr></hr>
            </div>
            <div className="Features-Paragraph">
              <p>
                Novi is a lifestyle website designed to help you improve
                productivity, achieve goals, and cultivate better health.
              </p>
            </div>
            <div className="Features-Paragraph">
              <p>
                We provide tools and guidance to help you organize your life,
                focus on what matters, and make steady progress towards your
                objectives.
              </p>
            </div>
          </div>
          <div className="Site-Image-Container">
            <div className="Site-Image">
              <img className="Feature-img" src={setup} alt="dog" />
            </div>
            <div className="Site-Image">
              <img className="Feature-img" src={career} alt="dog" />
            </div>
            <div className="Site-Image">
              <img className="Feature-img" src={food} alt="dog" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
