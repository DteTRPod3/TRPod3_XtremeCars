import { IcarData } from "./../../models/ICarData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartStatus {
  items: {
    item: IcarData;
    quantity: number;
  }[];
  totalCount: number;
}

const initialState: cartStatus = {
  items: [],
  totalCount: 4,
};

const removeItemFromCart = (state: any, action: any) => {
  state.items = state.items.filter(
    (item: any) => item.item.id !== action.payload.id
  );
};

const addItemToCart = (state: any, action: any) => {
  const matchingItemInCart = state.items.find(
    (item: any) => item.item.id === action.payload.id
  );
  state.totalCount = state.totalCount + 1;
  if (matchingItemInCart !== undefined) {
    matchingItemInCart.quantity += 1;
    return;
  }
  state.items.push({ item: action.payload, quantity: 1 });
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IcarData>) => {
      addItemToCart(state, action);
    },
    increaseQuantity: (state, action: PayloadAction<IcarData>) => {
      addItemToCart(state, action);
    },
    decreaseQuantity: (state, action: PayloadAction<IcarData>) => {
      const matchingItemInCart = state.items.find(
        (item) => item.item.id === action.payload.id
      );

      if (matchingItemInCart !== undefined && matchingItemInCart.quantity > 1) {
        matchingItemInCart.quantity -= 1;
      } else {
        removeItemFromCart(state, action);
      }
      state.totalCount -= 1;
    },
    removeFromCart: (state, action: PayloadAction<IcarData>) => {
      const matchingItemInCart = state.items.find(
        (item) => item.item.id === action.payload.id
      );
      state.totalCount -= matchingItemInCart!.quantity;
      removeItemFromCart(state, action);
    },
  },
});

export default CartSlice.reducer;
export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } =
  CartSlice.actions;
