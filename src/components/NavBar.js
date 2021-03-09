import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import FacebookLogin from "react-facebook-login";
import PropTypes from "prop-types";
import logo from "../images/logo.png";

const NavBar = ({ onLogin, userID, onLogout }) => {
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
          <Link className="link" to="/AddProperty">
            Add Property
          </Link>
        </li>
        <li className="navbar-links__item">
          <Link className="link" to="/SavedProperties">
            Saved Properties
          </Link>
        </li>
      </ul>
      {userID ? (
        <button type="button" onClick={onLogout}>
          Sign out
        </button>
      ) : (
        <FacebookLogin
          appId="772892546664505"
          fields="name,email,picture"
          callback={onLogin}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
      )}
    </div>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  userID: PropTypes.number.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NavBar;
