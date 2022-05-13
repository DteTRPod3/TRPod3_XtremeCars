import React, { useEffect, useState } from "react";
import "./CarCard.scss";
import rightarrow from "../../assets/rightArrow.svg";
import { CarDetails } from "../../models/CarDetails";
import { useDispatch, useSelector } from "react-redux";
import { addToCompare } from "../../redux/CompareCars/reducer";
import { NUMBEROFCARSTOCOMPARE } from "../../constants";

const CarCard = (props: {carData: CarDetails}) => {
  const dispatch = useDispatch() 
  const [disable,setDisable] = useState(false)
  const addToCompareCars = ()=>{
    dispatch(addToCompare(props.carData.id))
  }
  debugger
  const compareCarsIds = useSelector((state: any) => {
    return state.CompareCarReducer.carsIds;
  });
  
  const {id:currentCarId} = props.carData
  useEffect(() => {
    compareCarsIds.forEach((carId:any)=>{
      if(carId===currentCarId) setDisable(true)
      if(compareCarsIds.length===2) setDisable(true)
    })
  }, [compareCarsIds.length])

  return (
    <div className="car-card-main">
      <img className="car-card-car-image" src={props.carData.image} alt="car-img" />
      <div className="car-card-data">
        <div>
          <h6> {props.carData.name}</h6>
          <p>{props.carData.price} kh onwards</p>
        </div>
        <div>
          <img src={rightarrow} alt="detail" />
        </div>
      </div>
      <div className="car-card-btn-group">
        <button className="car-card-btn">Add to cart</button>
        <button className="car-card-btn" onClick={addToCompareCars} disabled={disable}> Add to compare</button>
        <button className="car-card-btn"> Add to wishlist</button>
      </div>
    </div>
  );
};

export default CarCard;
