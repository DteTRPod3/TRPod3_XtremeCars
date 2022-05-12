import { configureStore } from "@reduxjs/toolkit";
import authenticationreducer from "./Authentication/reducer";
import CartReducer from "./Cart/CartSlice";

export const store = configureStore({
  reducer: {
    AuthenticationReducer: authenticationreducer,
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
