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
    wishlist: (state, action: PayloadAction<{ carData: CarDetails }>) => {
      const newCarDetails = action.payload.carData;
      const uniqueArray = state.wishCars.filter(function (item) {
        return state.wishCars.find(() => item.id !== newCarDetails.id);
      });
      state.wishCars = [...uniqueArray, newCarDetails];
    },
  },
});

export default WishListSlice.reducer;
export const { wishlist } = WishListSlice.actions;
