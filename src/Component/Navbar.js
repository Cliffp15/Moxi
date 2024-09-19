import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Container">
      <div className="Navbar">
        <div className="Navbar-logo"> Moxi</div>
        <ul className="Navbar-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Fun</a>
          </li>
          <li>
            <a href="#">Health</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
          <li>
            <a href="#">Finance</a>
          </li>
          <li className="Navbar-sign-in">
            <a href="#">
              {" "}
              <span className="Signs">Sign-in</span>
            </a>
            {/* <button className="Navbar-sign-in">Sign in</button> */}
          </li>
          <li className="Navbar-sign-up">
            {/* <a href="&">Sign up</a> */}

            <button>
              <span className="Signs">Sign-Up</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
