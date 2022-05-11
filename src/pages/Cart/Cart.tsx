import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { IcarData } from "../../models/ICarData";
import { RootState } from "../../redux/store";
import "./Cart.scss";

function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log("cartItems", cartItems);
  return (
    <div className="cart-main-container">
      <h3>Cart </h3>
      <br />
      <hr /> <br />
      {cartItems?.map((item: any, index) => (
        <CartItem key={index} cardData={item.item} />
      ))}
    </div>
  );
}

export default Cart;
