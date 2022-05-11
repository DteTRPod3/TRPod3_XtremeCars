import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CarList from "../../pages/CarList/CarList";
import CompareCars from "../../pages/CompareCars/CompareCars";

function RouterComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CarList />}></Route>
        <Route path="/compare-cars" element={<CompareCars />}></Route>
      </Routes>
    </div>
  );
}

export default RouterComponent;
