import React from "react";
import { Route, Routes } from "react-router-dom";
import CarList from "../../pages/CarList/CarList";
import Cart from "../../pages/Cart/Cart";
import CompareCars from "../../pages/CompareCars/CompareCars";

function RouterComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CarList />}></Route>
        <Route path="/compare-cars" element={<CompareCars />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default RouterComponent;
