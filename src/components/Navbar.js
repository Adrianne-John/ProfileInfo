import React from "react";
import "./Navbar.css";
import adri from "../pages/images/adrianne_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={adri} alt="logo"/>
      <h1 className="logo">Camus</h1>
      <button className="login-btn">LOG IN</button>
    </nav>
  );
};

export default Navbar;
