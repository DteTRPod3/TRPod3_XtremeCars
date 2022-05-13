import React from "react";
import { useDispatch } from "react-redux";
import { IcarData } from "../../models/ICarData";
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/Cart/CartSlice";
import "./CartItem.scss";

function CartItem(cardData: any) {
  const car = cardData.cardData.item as IcarData;
  const quantity = cardData.cardData.quantity as number;
  const dispatch = useDispatch();
  return (
    <div className="cart-item-card-container">
      <div className="cart-item-image">car image</div>
      <p>{car?.name}</p>
      <div className="cart-item-quantity-div">
        <button onClick={() => dispatch(decreaseQuantity(car))}>-</button>
        <span>Qty: {quantity}</span>
        <button onClick={() => dispatch(increaseQuantity(car))}>+</button>
      </div>
      <p>{car?.price}</p>
      <button onClick={() => dispatch(removeFromCart(car))}>
        Remove from Cart
      </button>
    </div>
  );
}

export default CartItem;
