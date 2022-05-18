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
  const cartCount = useSelector((state: RootState) => state.cart.totalCount);

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
        {" "}
        <NavLink to="/" className="nav-link">
          <div className="nav-bar-main__brandLogo">
            <img src={Logo} alt="Xtreme cars logo" />
            <h5>XTREME CARS</h5>
          </div>
        </NavLink>
      </div>

      <div className="nav-bar-main__car-btn-group">
        <div className="nav-bar-main__car-link">
          <NavLink to="/" className="nav-link">
            All Cars
          </NavLink>
        </div>

        <div className="nav-bar-main__car-link">
          <NavLink to="/compare-cars" className="nav-link">
            Compare Cars
          </NavLink>
        </div>
      </div>

      <div className="nav-bar-profile-div">
        <div className="nav-bar-profile-div__item">
          <NavLink to="/Wishlist" title="Wishlist" className="nav-link">
            <img className="nav-bar-wish-icon" src={wishlist} alt="wishlist" />
            <span
              className={
                wishCarsCount === 0 ? "nav__icon--hide" : "nav__wishCount"
              }
            >
              {wishCarsCount}
            </span>
          </NavLink>
        </div>

        <div className="nav-bar-profile-div__item">
          <NavLink to="/cart" title="Cart" className="nav-link">
            <img
              className="nav-bar-main__cart-img"
              src={cartImage}
              alt="cart"
            />
            <span
              className={
                cartCount === 0 ? "nav__icon--hide" : " nav__cartCount"
              }
            >
              {cartCount}
            </span>
          </NavLink>
        </div>
        <div className="nav-bar-profile-div__item">
          <img
            className="nav-bar__profile-img"
            src={profilepicture}
            alt="Profile pic"
          />
          {user?.isAuthenticated === false && (
            <NavLink to="/login" className="nav-link">
              <button>Login/Signup</button>
            </NavLink>
          )}
          {user?.isAuthenticated && (
            <span className="nav-bar-profile-div__item">
              {user?.user?.name.toLocaleUpperCase()}
            </span>
          )}
        </div>

        {user?.isAuthenticated && (
          <div className="nav-bar-profile-div__item">
            <NavLink to="/" className="nav-link">
              <button onClick={logoutUser}>Logout</button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
