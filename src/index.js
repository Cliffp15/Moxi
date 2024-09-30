import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./Styles/Navbar.css";
import "./Styles/Home.css";
// import "./Styles/Features.css";
// import "./Styles/Footer.css";
import "./Styles/SignUp.css";
import "./Styles/Services.css";
import "./Styles/ServiceCards.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
