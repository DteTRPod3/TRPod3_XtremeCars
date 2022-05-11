import React from "react";
import { Route, Routes } from "react-router-dom";
import CarList from "../../pages/CarList/CarList";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";

function RouterComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CarList />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default RouterComponent;
