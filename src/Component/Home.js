import React from "react";
import lemon from "../Images/Lemon.png";
import fun from "../Images/Fun.jpg";
import finance from "../Images/Finance.jpg";
import productivity from "../Images/Productivity.jpg";
import fitness from "../Images/Fitness.jpg";
import Features from "../Component/Features";
import Services from "./Services";
import ServiceCards from "./ServiceCards";
import Counter from "./Counter";

function HelloWorld() {
  return (
    <div>
      <section className="Container">
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
              <button>
                Get Started <span className="arrow">&#8594;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Counter />
      <Services />

      <ServiceCards
        header="Fun" //"Journal,Hobbies, fun events"
        paragraph={
          "We analyze your unique situation and provide a tailored plan to help you achieve your goals"
        }
        image={fun}
      />
      <ServiceCards
        header="Health" //"Wellness/Health"
        paragraph={
          "We prodvide health and wellness plans to help you stay healthy"
        }
        image={fitness}
      />
      <ServiceCards
        header="Career" //"Goals/Productivity/"
        paragraph={
          "Our goal specialists work with you to set and achieve your goals"
        }
        image={productivity}
      />

      <ServiceCards
        header="Finance"
        paragraph={
          "We track your spending and provide financial advice to help you save"
        }
        image={finance}
      />
    </div>
  );
}

export default HelloWorld;
