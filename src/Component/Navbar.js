import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Container">
      <div className="Navbar">
        <div className="Navbar-logo">
          <Link to="/">Moxi</Link>{" "}
        </div>
        <ul className="Navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Fun">Fun</Link>
          </li>
          <li>
            <Link to="/Health">Health</Link>
          </li>
          <li>
            <Link to="/Career">Career</Link>
          </li>
          <li>
            <Link to="/Finance">Finance</Link>
          </li>
          <li className="Navbar-sign-in">
            <span className="Signs">
              <Link to="/signin">Sign-in</Link>
            </span>
          </li>
          <li className="Navbar-sign-up">
            <button>
              <span className="Signs">
                <Link to="/signup">Sign-Up</Link>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
