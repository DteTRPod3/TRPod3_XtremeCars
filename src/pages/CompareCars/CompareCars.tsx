import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompareCard from "../../components/CompareCard/CompareCard";
import { addToCompare } from "../../redux/CompareCars/CompareCarsSlice";
import { getRequest } from "../../requests/apiRequest";
import "./CompareCars.scss";
import {
  fetchCarDetailsErrorState,
  fetchCarDetailsGetData,
  fetchCarDetailsLoadState,
} from "../../redux/CompareCarsDetails/CompareCarsDetailsSlice";

function CompareCars() {
  const length = 2;
  const dispatch = useDispatch();
  const compareCars = useSelector((state: any) => {
    return state.CompareCarReducer.carsIds;
  });
  useEffect(() => {
    compareCars.forEach((cid: any) => {
      const url = `http://localhost:8080/cars/details/${cid}`;
      getRequest(url)
        .then((response) => {
          dispatch(fetchCarDetailsGetData({ carDetail: response }));
        })
        .catch((error) => {
          dispatch(fetchCarDetailsErrorState({ error: "Error" }));
        });
    });
  }, []);

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
        {length < 1 && (
          <section className="compare-cars-car1-column compare-cars-column">
            <a>Go to Home Page to add car</a>
          </section>
        )}
        {length >= 1 && (
          <section className="compare-cars-car1-column compare-cars-column">
            <CompareCard />
          </section>
        )}
        {length < 2 && (
          <section className="compare-cars-car1-column compare-cars-column">
            <a>Go to Home Page to add car</a>
          </section>
        )}
        {length >= 2 && (
          <section className="compare-cars-car1-column compare-cars-column">
            <CompareCard />
          </section>
        )}
      </main>
    </>
  );
}

export default CompareCars;
