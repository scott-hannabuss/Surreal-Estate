import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// import PropTypes from "prop-types";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <li>
        <img src={logo} className="logo" alt="surreal-estate-logo" />
      </li>
      <li datatest-id="test-view-properties-link">
        <Link className="link" to="/">
          View Properties
        </Link>
      </li>
      <li datatest-id="test-add-properties-link" className="navbar-links__item">
        <Link className="link" to="/AddProperty">
          Add Property
        </Link>
      </li>
      {/* {/* {userID ? (
        <li className="navbar-links__item">
          <Link className="link" to="/SavedProperties">
            Saved Properties
          </Link>
        </li>
      ) : (
        " "
      )}
      {userID ? (
        <button className="facebook-logout" type="button" onClick={onLogout}>
          SIGN OUT
        </button>
      ) : (
        <FacebookLogin
          appId="772892546664505"
          callback={onLogin}
          render={(renderProps) => (
            <button
              className="facebook-login"
              type="button"
              onClick={renderProps.onClick}
            >
              LOGIN WITH FACEBOOK
            </button> */}
    </div>
  );
};

// NavBar.propTypes = {
//   onLogin: PropTypes.func.isRequired,
//   userID: PropTypes.number.isRequired,
//   onLogout: PropTypes.func.isRequired,
// };

export default NavBar;
