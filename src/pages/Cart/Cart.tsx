import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { RootState } from "../../redux/store";
import "./Cart.scss";

function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalCount = useSelector((state: RootState) => state.cart.totalCount);

  return (
    <div>
      <div className="cart-header">
        <p className="cart-header__title">My Cart</p>
        <p>Item Count: {totalCount}</p>
      </div>
      <div className="cart-main-container">
        {cartItems?.map((item: any, index) => (
          <CartItem key={index} cardData={item} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
