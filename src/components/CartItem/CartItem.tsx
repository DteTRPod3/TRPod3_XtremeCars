import React from "react";
import { useDispatch } from "react-redux";
import { CarDetails } from "../../models/CarDetails";
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/Cart/CartSlice";
import "./CartItem.scss";
import RemoveFromCartIcon from "../../assets/RemoveFromCart.svg";

function CartItem(cardData: any) {
  const car = cardData.cardData.item as CarDetails;
  const quantity = cardData.cardData.quantity as number;
  const dispatch = useDispatch();
  return (
    <div className="cart-item-card-container">
      <img
        src={car.image}
        alt="Preview not available"
        width={300}
        height={200}
      />
      <p className="card-item car-title">{car?.name}</p>
      <p className="card-item car-price">{car?.price}akh onwards</p>
      <div className="card-item card-content">
        <div className="cart-item-quantity-div">
          <p>Quantity:</p>
          <button
            className="button--dark"
            onClick={() => dispatch(decreaseQuantity(car))}
            title="Decrease the quantity"
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="button--dark"
            onClick={() => dispatch(increaseQuantity(car))}
            title="Increase the quantity"
          >
            +
          </button>
        </div>
        <button
          onClick={() => dispatch(removeFromCart(car))}
          title="Remove from Cart"
        >
          <img src={RemoveFromCartIcon} alt="" width={20} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
