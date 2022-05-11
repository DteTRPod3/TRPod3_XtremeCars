import React from "react";
import "./CarCard.scss";
import rightarrow from "../../assets/rightArrow.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Cart/CartSlice";
import { IcarData } from "../../models/ICarData";

const CarCard = (carData: any) => {
  const car = carData.carData as IcarData;
  const dispatch = useDispatch();

  return (
    <div className="car-card-main">
      <img className="car-card-car-image" src={car?.img} alt="car-img" />
      <div className="car-card-data">
        <div>
          <h6> {car?.name}</h6>
          <p>{car?.price} akh onwards</p>
        </div>
        <div>
          <img src={rightarrow} alt="detail" />
        </div>
      </div>
      <div className="car-card-btn-group">
        <button
          className="car-card-btn"
          onClick={() => dispatch(addToCart(car as IcarData))}
        >
          Add to cart
        </button>
        <button className="car-card-btn"> Add to compare</button>
        <button className="car-card-btn"> Add to wishlist</button>
      </div>
    </div>
  );
};

export default CarCard;
