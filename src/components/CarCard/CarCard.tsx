import React from "react";
import "./CarCard.scss";
import rightarrow from "../../assets/rightArrow.svg";
import { CarDetails } from "../../models/CarDetails";
import { useDispatch } from "react-redux";
import {
  removeFromWishList,
  addToWishlist,
} from "../../redux/WishList/reducer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CarCard = (props: { carData: CarDetails }) => {
  const wishListStatus = useSelector(
    (state: RootState) => state.wishListReducer.wishList
  ).find((item) => item.id === props.carData.id);
  const dispatch = useDispatch();

  const wishListHandler = () => {
    if (wishListStatus === undefined) {
      dispatch(addToWishlist(props.carData));
    } else {
      dispatch(removeFromWishList(props.carData));
    }
  };

  return (
    <div className="car-card-main">
      <img
        className="car-card-car-image"
        src={props.carData.image}
        alt="car-img"
      />
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
        <button className="car-card-btn"> Add to compare</button>
        <button className="car-card-btn" onClick={wishListHandler}>
          {wishListStatus === undefined
            ? "Add to WishList"
            : "Remove from Wishlist"}
        </button>
      </div>
    </div>
  );
};

export default CarCard;
