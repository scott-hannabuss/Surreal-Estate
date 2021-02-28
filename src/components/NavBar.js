import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li className="navbar-links__item">
          <img src={logo} className="logo" alt="surreal-estate-logo" />
        </li>
        <li className="navbar-links__item">
          <Link className="link" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links__item">
          <Link className="link" to="/add-property">
            Add Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
