import React from "react";
import lemon from "../Images/Lemon.png";

function HelloWorld() {
  return (
    <div>
      <section>
   
      <div className="Hero">
        <h2>Welcome to the future of <br></br>living better</h2>
        <h1>Organize Your Life Better</h1>
        <img className="Hero-img" src={lemon} alt="dog" />
        <div className="Hero-Buttons">
        <div><button>Get Started</button></div>
        {/* <div><button>Get Started</button></div> */}
        </div>
      </div>
      </section>
      
    </div>
  );
}

export default HelloWorld;
