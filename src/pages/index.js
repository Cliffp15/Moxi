import React from "react";
import fun from "../Images/Fun.jpg";
import finance from "../Images/Finance.jpg";
import productivity from "../Images/Productivity.jpg";
import fitness from "../Images/Fitness.jpg";
import Features from "../Component/Features";
import Services from "../Component/Services";
import ServiceCards from "../Component/ServiceCards";
// import lemon from "../Images/lemon.jpg";
import Navbar from "../Component/Navbar";
import Image from "next/image";

function HelloWorld() {
  return (
    <div>
      <Navbar />
      <section className="Container">
        <div className="Hero">
          <h2>
            Welcome to the future of <br></br>living better
          </h2>
          <h1>
            Organize <br></br>Your Life <br></br>Better
          </h1>
          {/* <Image className="Hero-img" src={lemon} alt="dog" /> */}
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
      <Services />

      {/* <ServiceCards
        header="Fun" 
        paragraph={
          "We analyze your unique situation and provide a tailored plan to help you achieve your goals"
        }
        image={fun}
      />
      <ServiceCards
        header="Health" 
        paragraph={
          "We prodvide health and wellness plans to help you stay healthy"
        }
        image={fitness}
      />
      <ServiceCards
        header="Career" 
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
      /> */}
    </div>
  );
}

export default HelloWorld;
