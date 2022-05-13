import React, { useEffect, useState } from "react";
import "./CarCard.scss";
import rightarrow from "../../assets/rightArrow.svg";
import { CarDetails } from "../../models/CarDetails";

import { addToCompare } from "../../redux/CompareCars/reducer";
import { NUMBER_OF_CARS_TO_COMPARE } from "../../constants";
import { addToCart } from "../../redux/Cart/CartSlice";
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

  const car = props.carData;

  const [disable, setDisable] = useState(false);
  const addToCompareCars = () => {
    dispatch(addToCompare(props.carData.id));
  };
  debugger;
  const compareCarsIds = useSelector((state: any) => {
    return state.compareCarReducer.carsIds;
  });

  const { id: currentCarId } = props.carData;
  useEffect(() => {
    compareCarsIds.forEach((carId: any) => {
      if (carId === currentCarId) setDisable(true);
      if (compareCarsIds.length === NUMBER_OF_CARS_TO_COMPARE) setDisable(true);
    });
  }, [compareCarsIds.length]);

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
        <button className="car-card-btn" onClick={wishListHandler}>
          {wishListStatus === undefined
            ? "Add to WishList"
            : "Remove from Wishlist"}
        </button>
        <button
          className="car-card-btn"
          onClick={addToCompareCars}
          disabled={disable}
        >
          Add to compare
        </button>
      </div>
    </div>
  );
};

export default CarCard;
