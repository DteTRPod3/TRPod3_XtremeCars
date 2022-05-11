import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CarList from "../../pages/CarList/CarList";
import CarCard from "../CarCard/CarCard";

function RouterComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CarList />}></Route>
      </Routes>
    </div>
  );
}

export default RouterComponent;
