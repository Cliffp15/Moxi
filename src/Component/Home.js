import React from "react";
import lemon from "../Images/Lemon.png";
import Features from "../Component/Features";
import Services from "./Services";
import ServiceCards from "./ServiceCards";

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
        <ServiceCards
          header="Productivity"
          paragraph={
            "We analyze your unique situation and provide a tailored plan to help you achieve your goals"
          }
          image={"../Images/Lemon.png"}
        />
        <ServiceCards
          header="Goals"
          paragraph={
            "Our goal specialists work with you to set and achieve your goals"
          }
          image={"../Images/Lemon.png"}
        />

        <ServiceCards
          header="Wellness"
          paragraph={
            "We prodvide health and wellness plans to help you stay healthy"
          }
          image={"../Images/Lemon.png"}
        />
        <ServiceCards
          header="Finanace"
          paragraph={
            "We track your spending and provide financial advice to help you save"
          }
          image={"../Images/Lemon.png"}
        />
      </section>
    </div>
  );
}

export default HelloWorld;
