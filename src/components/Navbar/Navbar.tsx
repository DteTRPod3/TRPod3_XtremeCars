import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import loggedProfile from "../../assets/man.png";
import cartImage from "../../assets/cartImage.svg";
import wishlist from "../../assets/heart.svg";
import UnknownProfile from "../../assets/profile.svg";
import { logout } from "../../redux/Authentication/reducer";
import "./Navbar.scss";
import { RootState } from "../../redux/store";
const Navbar = () => {
  const wishCars = useSelector(
    (state: RootState) => state.wishListReducer.wishList
  );

  const wishCarsCount = wishCars?.length;
  const isLoggedin = true;
  let profilepicture;
  const user = useSelector((state: RootState) => state.authenticationReducer);
  user?.isAuthenticated === true
    ? (profilepicture = loggedProfile)
    : (profilepicture = UnknownProfile);
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <div className="nav-bar-main">
      <div>
        <NavLink to="/" className="nav-link">
          <div className="nav-bar--logo">
            <img src={Logo} alt="Xtreme cars logo" />
            <h5>XTREME CARS</h5>
          </div>
        </NavLink>
      </div>

      <div className="nav-bar--car-btn-group">
        <div className="nav-bar-car-link">
          <NavLink to="/" className="nav-link">
            All Cars
          </NavLink>
        </div>

        <div className="nav-bar-car-link">
          <NavLink to="/compare-cars" className="nav-link">
            Compare Cars
          </NavLink>
        </div>
      </div>

      <div className="nav-bar-right">
        <div className="nav-cart-container">
          <NavLink to="/Wishlist" title="Wishlist" className="nav-link">
            <img className="nav-bar-wish-icon" src={wishlist} alt="wishlist" />
            <span className="nav--wish-count">{wishCarsCount}</span>
          </NavLink>
        </div>

        <div className="nav-cart-container">
          <NavLink to="/cart" title="Cart" className="nav-link">
            <img className="nav-bar-cart-img" src={cartImage} alt="cart" />
            <span className="nav--cart-count">
              {useSelector((state: RootState) => state.cart.totalCount)}
            </span>
          </NavLink>
        </div>
        <div className="nav-cart-container">
          {user?.isAuthenticated === false && (
            <NavLink to="/login" className="nav-link">
              Login/Signup{" "}
            </NavLink>
          )}
          <img
            className="nav-bar-profile-img"
            src={profilepicture}
            alt="Profile pic"
          />
        </div>
        {user?.isAuthenticated && (
          <div className="nav-cart-container">
            <NavLink to="/" className="nav-link">
              <button className="button--logout" onClick={logoutUser}>
                Logout
              </button>
            </NavLink>
          </div>
        )}
        {user?.isAuthenticated && (
          <div className="nav-cart-container">
            {user?.user?.name.toLocaleUpperCase()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
