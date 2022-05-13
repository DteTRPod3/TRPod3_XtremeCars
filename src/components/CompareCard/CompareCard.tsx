import React from "react";
import { useDispatch } from "react-redux";
import { ICarComparisonDetails } from "../../models/ICarComparisonDetails";
import { removeFromCompare } from "../../redux/CompareCars/reducer";
import { removeCarDetailsData } from "../../redux/CompareCarsDetails/reducer";

function CompareCard(props:any) {
  const carId = props.carId
  const car:ICarComparisonDetails = props.carsData
  const dispatch = useDispatch()
  const removeCar = ()=>{
    dispatch(removeCarDetailsData(car.specifications.name))
    dispatch(removeFromCompare(carId))
  }
  return (
    <>
      <header data-carId={carId}>
        <h3>{car.specifications.name}</h3>
      </header>
      <div>
        <p>{car.specifications.fuel_type}</p>
      </div>
      <div>
        <p>{car.specifications.engine_cc}</p>
      </div>
      <div>
        <p>{car.specifications.torque}</p>
      </div>
      <div>
        <p>{car.specifications.acceleration}</p>
      </div>
      <div>
        <p>{car.specifications.top_speed}</p>
      </div>
      <div>
        <p>{car.cost}</p>
      </div>
      <div>
          <button onClick={removeCar}>Remove</button>
      </div>
    </>
  );
}
export default CompareCard;
