import React from "react";
import "./CarCard.scss";
import rightarrow from "../../assets/rightArrow.svg";

const CarCard = (carData: any) => {
  return (
    <div className="car-card-main">
      <img className="car-card-car-image" src={carData.img} alt="car-img" />
      <div className="car-card-data">
        <div>
          <h6> {carData.name}</h6>
          <p>{carData.price} akh onwards</p>
        </div>
        <div>
          <img src={rightarrow} alt="detail" />
        </div>
      </div>
      <div className="car-card-btn-group">
        <button className="car-card-btn">Add to cart</button>
        <button className="car-card-btn"> Add to compare</button>
        <button className="car-card-btn"> Add to wishlist</button>
      </div>
    </div>
  );
};

export default CarCard;
