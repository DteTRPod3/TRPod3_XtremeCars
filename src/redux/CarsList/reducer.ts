import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarDetails } from "../../models/CarDetails";

const initialState: { cars: CarDetails[] } = { cars: [] };

export const carsListSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    updateCars(state, action: PayloadAction<{ replaceCars: CarDetails[] }>) {
        state.cars = action.payload.replaceCars;
    },
  },
});

export default carsListSlice.reducer;
export const { updateCars } = carsListSlice.actions;