import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import loggedProfile from "../../assets/man.png";
import cartImage from "../../assets/cartImage.svg";
import wishListIcon from "../../assets/WishlistIcon.png";
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
          <NavLink to="/Wishlist">
            <img
              className="nav-bar-cart-img"
              src={wishListIcon}
              alt="wishList"
            />
            {wishCarsCount}
          </NavLink>
        </div>

        <div className="cart-div">
          <NavLink to="/cart">
            <img className="nav-bar-cart-img" src={cartImage} alt="cart" />(
            {useSelector((state: RootState) => state.cart.totalCount)})
          </NavLink>
        </div>
        <div className="cart-div">
          {user?.isAuthenticated === false && (
            <NavLink to="/login">Login/Signup</NavLink>
          )}
          <img
            className="nav-bar-profile-img"
            src={profilepicture}
            alt="Profile pic"
          />
        </div>
        {user?.isAuthenticated && (
          <div className="cart-div">
            <NavLink to="/">
              <button onClick={logoutUser}>Logout</button>
            </NavLink>
          </div>
        )}
        {user?.isAuthenticated && (
          <div className="cart-div">{user?.user?.name}</div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
