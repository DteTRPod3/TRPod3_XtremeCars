import React from "react";
import { useDispatch } from "react-redux";
import { IcarData } from "../../models/ICarData";
import { removeFromCart } from "../../redux/Cart/CartSlice";
import "./CartItem.scss";

function CartItem(cardData: any) {
  const carData = cardData.cardData as IcarData;
  const dispatch = useDispatch();
  return (
    <div className="cart-item-card-container">
      <div className="cart-item-image"></div>
      <p>{carData.name}</p>
      <p>{carData.price}</p>
      <button onClick={() => dispatch(removeFromCart(carData))}>
        Remove from Cart
      </button>
    </div>
  );
}

export default CartItem;
