import { CarDetails } from "./../../models/CarDetails";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface wishState {
  wishList: CarDetails[];
}

const initialState: wishState = { wishList: [] };

export const wishListSlice = createSlice({
  name: "WishList",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<CarDetails>) => {
      const newCarDetails = action.payload;
      state.wishList.push(newCarDetails);
    },

    removeFromWishList: (state, action: PayloadAction<CarDetails>) => {
      const carToRemove = action.payload;
      state.wishList = state.wishList.filter(
        (car) => car.id !== carToRemove.id
      );
    },
  },
});

export default wishListSlice.reducer;
export const { addToWishlist, removeFromWishList } = wishListSlice.actions;
