import React from "react";
import lemon from "../Images/Lemon.png";
import Features from "../Component/Features";
import Services from "./Services";

function HelloWorld() {
  return (
    <div>
      <section>
        <div className="Hero">
          <h2>
            Welcome to the future of <br></br>living better
          </h2>
          <h1>
            Organize <br></br>Your Life <br></br>Better
          </h1>
          <img className="Hero-img" src={lemon} alt="dog" />
          <div className="Hero-Buttons">
            <div>
              <button>Get Started</button>
            </div>
          </div>
        </div>
        <Features />
        <Services />
      </section>
    </div>
  );
}

export default HelloWorld;
