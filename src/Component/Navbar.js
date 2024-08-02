import React from "react";

function Navbar() {
  return (
    <div>
      <div className="Navbar">
        <div className="Navbar-logo"> Moxi</div>
        <ul className="Navbar-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li className="Navbar-sign-in">
            <a href="#">Sign in</a>
            {/* <button className="Navbar-sign-in">Sign in</button> */}
          </li>
          <li className="Navbar-sign-up">
            {/* <a href="&">Sign up</a> */}

            <button>Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
