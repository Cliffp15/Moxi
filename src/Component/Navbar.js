import React from "react";
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Container">
      <div className="Navbar">
        <div className="Navbar-logo">
          <a href="/Services">Moxi</a>
          {/* <Link to="/">Moxi</Link>{" "} */}
        </div>
        <ul className="Navbar-links">
          <li>
            <a href="/Services">Home</a>
            {/* <Link to="/">Home</Link> */}
          </li>
          <li>
            <a href="/Services">Services</a>
            {/* <Link to="/Services">Services</Link> */}
          </li>
          <li>
            <a href="/Services">Fun</a>
            {/* <Link to="/Fun">Fun</Link> */}
          </li>
          <li>
            <a href="/Services">Health</a>
            {/* <Link to="/Health">Health</Link> */}
          </li>
          <li>
            <a href="/Services">Career</a>
            {/* <Link to="/Career">Career</Link> */}
          </li>
          <li>
            <a href="/Services">Fiance</a>
            {/* <Link to="/Finance">Finance</Link> */}
          </li>
          <li className="Navbar-sign-in">
            <span className="Signs">
              <a href="/Services">SignIn</a>{" "}
              {/* <Link to="/signin">Sign-in</Link> */}
            </span>
          </li>
          <li className="Navbar-sign-up">
            <button>
              <span className="Signs">
                <a href="/Services">SignUp</a>{" "}
                {/* <Link to="/signup">Sign-Up</Link> */}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
