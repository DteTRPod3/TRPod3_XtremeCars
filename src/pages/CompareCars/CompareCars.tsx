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
import { CarDetails } from "../../models/CarDetails";
import plusIcon from "../../assets/plus.png"

function CompareCars() {
  const dispatch = useDispatch();
  const compareCars = useSelector((state: any) => {
    return state.compareCarReducer.carsIds;
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
  const carDetails: ICarComparisonDetails[] = useSelector((state: any) => {
    return state.compareCarsDetailsSlice.carsDetail;
  });
  const carNames = carDetails.map((car: ICarComparisonDetails) => {
    return car.specifications.name;
  });
  const carDetailsRendering = carDetails.map(
    (car: ICarComparisonDetails, index: number) => {
      return (
        <section className="compare-cars__column">
          <CompareCard carsData={car} carId={compareCars[index]} />
        </section>
      );
    }
  );

  const renderNoCar = [];
  for (let i = 0; i < NUMBER_OF_CARS_TO_COMPARE - carDetails.length; i++) {
    renderNoCar.push(
      <section
        key={i + 1}
        className="compare-cars__column compare-cars__flex"
      >
        <Link to={"/"} className="compare-cars__add-car  compare-cars__flex">
          <img src={plusIcon} alt="add" />
          <p>Please Add Car to Compare</p>
        </Link>
      </section>
    );
  }
  return (
    <>
      <div className="compare-cars__container compare-cars__flex">
        <header className="compare-cars__header">
          {carNames.length === 2 && (
            <h2>
              {carNames[0]} Vs {carNames[1]}
            </h2>
          )}
          {carNames.length === 1 && <h2>{carNames[0]}</h2>}
        </header>
        <main className="compare-cars__main compare-cars__flex">
          <section className="compare-cars__column">
            <div className="compare-cars__comparison">
            </div>
            <div>
              <p><b>Fuel Type</b></p>
            </div>
            <div>
              <p><b>Engine</b></p>
            </div>
            <div>
              <p><b>Torque</b></p>
            </div>
            <div>
              <p><b>Acceleration</b></p>
            </div>
            <div>
              <p><b>Top Speed</b></p>
            </div>
            <div>
              <p><b>On Road Price</b></p>
            </div>
          </section>
          {carDetailsRendering}
          {renderNoCar}
        </main>
      </div>
    </>
  );
}
export default CompareCars;
