import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarDetails } from "../../models/CarDetails";

const initialState: {
  cars: CarDetails[]|null,
  loading: boolean|null,
  error: string|null
} = {
  cars: null,
  loading: null,
  error: null
};

export const carsListSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    updateCars(state, action: PayloadAction<{ replaceCars: CarDetails[] }>) {
      state.cars = action.payload.replaceCars;
      state.loading = false;
      state.error = null;
    },
    updateLoadState(state) {
      state.cars = [];
      state.loading = true;
      state.error = null;
    },
    updateErrorState(state, action: PayloadAction<{ error: string }>) {
      state.cars = null;
      state.loading = false;
      state.error = action.payload.error;
    }
  },
});

export default carsListSlice.reducer;
export const { updateCars, updateLoadState, updateErrorState } = carsListSlice.actions;
