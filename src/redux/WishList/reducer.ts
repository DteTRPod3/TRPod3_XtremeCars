import { CarDetails } from "./../../models/CarDetails";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState: { wishCars: CarDetails[]; error: boolean } = {
  wishCars: [],
  error: false,
};

export const WishListSlice = createSlice({
  name: "WishList",
  initialState,
  reducers: {
    wishlist: (state, action: any) => {
      const newCarDetails = action.payload;

      state.wishCars = [...state.wishCars, newCarDetails];
    },
  },
});

export default WishListSlice.reducer;
export const { wishlist } = WishListSlice.actions;
