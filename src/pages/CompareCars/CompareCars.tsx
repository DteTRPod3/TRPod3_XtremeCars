import React from "react";
import CompareCard from "../../components/CompareCard/CompareCard";
import "./CompareCars.scss";

function CompareCars() {
  const length = 2;
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
