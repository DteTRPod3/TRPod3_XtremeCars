import React from "react";
import { Route, Routes } from "react-router-dom";
import CarList from "../../pages/CarList/CarList";
import Cart from "../../pages/Cart/Cart";
import CompareCars from "../../pages/CompareCars/CompareCars";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import WishList from "../../pages/WishList/WishList";

function RouterComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CarList />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/compare-cars" element={<CompareCars />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default RouterComponent;
