import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CarList from "../../pages/CarList/CarList";

function RouterComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CarList />}></Route>
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
      </Routes>
    </div>
  );
}

export default RouterComponent;
