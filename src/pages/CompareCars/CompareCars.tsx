import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompareCard from "../../components/CompareCard/CompareCard";
import { getRequest } from "../../requests/apiRequest";
import "./CompareCars.scss";
import {
  fetchCarDetailsErrorState,
  fetchCarDetailsGetData,
  resetCarsDetals,
} from "../../redux/CompareCarsDetails/reducer";
import { ICarComparisonDetails } from "../../models/ICarComparisonDetails";
import { API_URL, NUMBER_OF_CARS_TO_COMPARE } from "../../constants";
import { Link } from "react-router-dom";
import CarList from "../CarList/CarList";

function CompareCars() {
  debugger;
  const dispatch = useDispatch();
  const compareCars = useSelector((state: any) => {
    return state.compareCarReducer.carsIds;
  });
  const carDetails = useSelector((state: any) => {
    return state.compareCarsDetailsSlice.carsDetail;
  });
  useEffect(() => {
    document.title = "Xtreme Cars | Compare Cars";
  }, []);

  useEffect(() => {
    dispatch(resetCarsDetals());
    compareCars.forEach((cid: any) => {
      const url = `${API_URL}cars/details/${cid}`;
      getRequest(url)
        .then((response) => {
          dispatch(fetchCarDetailsGetData(response));
        })
        .catch((error) => {
          dispatch(fetchCarDetailsErrorState("Error occured"));
        });
    });
  }, []);
  const carDetailsRendering = carDetails.map(
    (car: ICarComparisonDetails, index: number) => {
      return (
        <section className="compare-cars-car1-column compare-cars-column">
          <CompareCard carsData={car} carId={compareCars[index]} />
        </section>
      );
    }
  );

  const renderNoCar = [];
  for (let i = 0; i < NUMBER_OF_CARS_TO_COMPARE - carDetails.length; i++) {
    renderNoCar.push(
      <section className="compare-cars-car1-column compare-cars-column">
        <Link to={"/"}>Please Add a Car to Compare</Link>
      </section>
    );
  }
  return (
    <>
      <main className="compare-cars-container">
        <section className="compare-cars-heading-column compare-cars-column">
          <header>
            <h3>Comparison</h3>
          </header>
          <div>
            <p>Fuel Type</p>
          </div>
          <div>
            <p>Engine</p>
          </div>
          <div>
            <p>Torque</p>
          </div>
          <div>
            <p>Acceleration</p>
          </div>
          <div>
            <p>Top Speed</p>
          </div>
          <div>
            <p>On Road Price</p>
          </div>
        </section>
        {carDetailsRendering}
        {renderNoCar}
      </main>
    </>
  );
}
export default CompareCars;
