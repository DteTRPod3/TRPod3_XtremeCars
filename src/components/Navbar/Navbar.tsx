import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import loggedProfile from "../../assets/man.png";
import cartImage from "../../assets/cartImage.svg";
import UnknownProfile from "../../assets/profile.svg";
import "./Navbar.scss";
const Navbar = () => {
  const isLoggedin = true;
  let profilepicture;

  isLoggedin === true
    ? (profilepicture = loggedProfile)
    : (profilepicture = UnknownProfile);

  return (
    <div className="nav-bar-main">
      <div>
        <NavLink to="/">
          <div className="nav-bar-logo">
            <img src={Logo} alt="Xtreme cars logo" />
            <h5>XTREME CARS</h5>
          </div>
        </NavLink>
      </div>

      <div className="nav-bar-car-btn-group">
        <div className="nav-bar-car-link">
          <NavLink to="/allcars">All Cars</NavLink>
        </div>
        <div className="nav-bar-car-link">
          <NavLink to="/usedcars">Used Cars</NavLink>
        </div>
        <div className="nav-bar-car-link">
          <NavLink to="/newcars">New Cars</NavLink>
        </div>
        <div className="nav-bar-car-link">
          <NavLink to="/compare-cars">Compare Cars</NavLink>
        </div>
      </div>

      <div className="nav-bar-right">
        <div className="cart-div">
          <NavLink to="/cart">
            <img className="nav-bar-cart-img" src={cartImage} alt="cart" />
          </NavLink>
        </div>
        <div className="cart-div">
          <NavLink to="/login">
            Login/Signup
            <img
              className="nav-bar-profile-img"
              src={profilepicture}
              alt="Profile pic"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
