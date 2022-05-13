import React from "react";
import "./CarCard.scss";
import rightarrow from "../../assets/rightArrow.svg";
import { CarDetails } from "../../models/CarDetails";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Cart/CartSlice";

const CarCard = (props: {carData: CarDetails}) => {
  const car = props.carData;
  const dispatch = useDispatch();

  return (
    <div className="car-card-main">
      <img className="car-card-car-image" src={car.image} alt="car-img" />
      <div className="car-card-data">
        <div>
          <h6> {car.name}</h6>
          <p>{car.price} kh onwards</p>
        </div>
        <div>
          <img src={rightarrow} alt="detail" />
        </div>
      </div>
      <div className="car-card-btn-group">
        <button
          className="car-card-btn"
          onClick={() => dispatch(addToCart(car))}
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
