import { configureStore } from "@reduxjs/toolkit";
import authenticationreducer from "./Authentication/reducer";
import CartReducer from "./Cart/CartSlice";
import carsListSlice from "./CarsList/reducer";

export const store = configureStore({
  reducer: {
    AuthenticationReducer: authenticationreducer,
    carsListReducer: carsListSlice,
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
