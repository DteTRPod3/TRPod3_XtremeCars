import React from "react";
import CompareCard from "../../components/CompareCard/CompareCard";
import "./CompareCars.scss";

function CompareCars() {
  // const username="Hasher"
  // const password="L#(qc{f}TaJu4%4k"
  // const url="http://localhost:8080/cars"
  // const fetchData = ()=>{
  //     fetch(url, {
  //         method:"GET",
  //         headers: {
  //             'Authorization': 'Basic ' + btoa(`${username}:${password}`)
  //         }
  //     })
  //     .then(response => response.json())
  //     .then(json => console.log(json));
  // }
  // fetchData()

  const length = 2;
  return (
    <>
      <main className="compare-cars-container">
        <section className="compare-cars-heading-column compare-cars-column">
          <header>
            <h3>Comparison</h3>
          </header>
          <header>
            <p>Fuel Type</p>
          </header>
          <header>
            <p>Engine</p>
          </header>
          <header>
            <p>Torque</p>
          </header>
          <header>
            <p>Acceleration</p>
          </header>
          <header>
            <p>Top Speed</p>
          </header>
          <header>
            <p>On Road Price</p>
          </header>
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
