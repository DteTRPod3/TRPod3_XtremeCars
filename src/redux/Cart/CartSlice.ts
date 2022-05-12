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
  totalCount: 0,
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IcarData>) => {
      let itemExists = false;
      if (state.items.length > 0) {
        state.items.forEach((element) => {
          if (element.item.id === action.payload.id) {
            itemExists = true;
            element.quantity += 1;
          }
        });
      }
      if (!itemExists) {
        state.items.push({ item: action.payload, quantity: 1 });
      }
      state.totalCount = state.totalCount + 1;
    },
    increaseQuantity: (state, action: PayloadAction<IcarData>) => {
      state.items.find(
        (item) => item.item.id === action.payload.id
      )!.quantity += 1;
      state.totalCount += 1;
    },
    decreaseQuantity: (state, action: PayloadAction<IcarData>) => {
      const qty = state.items.find((item) => item.item.id === action.payload.id)
        ?.quantity!;
      if (qty > 1) {
        state.items.find(
          (item) => item.item.id === action.payload.id
        )!.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.item.id !== action.payload.id
        );
      }
      state.totalCount -= 1;
    },
    removeFromCart: (state, action: PayloadAction<IcarData>) => {
      const qty = state.items.find(
        (item) => item.item.id === action.payload.id
      )?.quantity;
      state.totalCount -= qty!;
      state.items = state.items.filter(
        (item) => item.item.id !== action.payload.id
      );
    },
  },
});

export default CartSlice.reducer;
export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } =
  CartSlice.actions;
