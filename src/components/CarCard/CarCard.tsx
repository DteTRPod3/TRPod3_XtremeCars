import React from "react";
import "./CarCard.scss";
import rightarrow from "../../assets/rightArrow.svg";
import { IcarData } from "../../models/ICarData";

const CarCard = (carData: IcarData) => {
  return (
    <div className="car-card-main">
      <img
        className="car-card-car-image"
        src="https://cdn.shopify.com/s/files/1/1888/4399/files/hyundai-480x321.jpg?v=1604474915"
        alt="car-img"
      />
      <div className="car-card-data">
        <div>
          <h6> {carData.name}</h6>
          <p>{carData.price} kh onwards</p>
        </div>
        <div>
          <img src={rightarrow} alt="detail" />
        </div>
      </div>
      <div className="car-card-btn-group">
        <button>Add to cart</button>
        <button> Add to compare</button>
        <button> Add to wishlist</button>
      </div>
    </div>
  );
};

export default CarCard;
