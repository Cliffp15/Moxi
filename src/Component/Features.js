import React from "react";

import setup from "../Images/Productivity_Setup.jpg";
import food from "../Images/HealthyFood.jpg";
import career from "../Images/businesswoman-8676522.jpg";

const Features = () => {
  return (
    <div>
      <section className="Features-Container">
        <div className="Site-Intro-Section">
          <div className="Site-Description">
            <h2>
              Productivity <br></br> Website
            </h2>
            <hr></hr>
            <p>
              Novi is a lifestyle website designed to help you improve
              productivity, achieve goals, and cultivate better health.
            </p>
            <p>
              We provide tools and guidance to help you organize your life,
              focus on what matters, and make steady progress towards your
              objectives.
            </p>
          </div>
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
      </section>

      {/* <div className="Feature-Intro-Section">
        <h2>Features</h2>
        <p>Organize your life better with our features</p>
      </div> */}
      {/* <div className="Feature-Section">
      <p>This is a simple Home Page</p>

      <p>Click on the links above to navigate to different pages</p>

      <p>Click on the links above to navigate to different pages</p>
   </div> */}
    </div>
  );
};

export default Features;
