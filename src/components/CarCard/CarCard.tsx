import React, { useEffect, useState } from "react";
import "./CarCard.scss";
import rightarrow from "../../assets/rightArrow.svg";
import { CarDetails } from "../../models/CarDetails";
import  heart  from "../../assets/heartForCard.svg";
import  heartFill  from "../../assets/heart-fill.svg";
import  cart  from "../../assets/cartImageForCard.svg";
import compare from "../../assets/compare.svg";
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
    <div className="card">
      <img className="card__img" src={car.image} alt="car-img" />
      <div className="card__body">
        <div>
          <div>
            <h6> {car.name}</h6>
          </div>
          <div className="card-price__container">
            <p>{car.price}akh onwards</p>
            <img src={rightarrow} alt="detail" />
          </div>
        </div>
        <div className="card__btn-group">
          <button onClick={() => dispatch(addToCart(car))} title="Add to Card"><img className="card-btn" src={cart}/></button>
          <button onClick={wishListHandler} title="Add to Wishlist"><img className="card-btn"  src={(wishListStatus === undefined) ? heart : heartFill} /></button>
          <button onClick={addToCompareCars} disabled={disable} title="Add to Compare Card"><img className="card-btn" style={{opacity: (disable) ? 0.3 : 1}} src={compare}/></button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
