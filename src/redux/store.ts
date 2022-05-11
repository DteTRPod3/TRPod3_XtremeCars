import { configureStore } from "@reduxjs/toolkit";
// import { compose } from "redux";
import authenticationreducer from "./Authentication/reducer";
import CartReducer from "./Cart/CartSlice";

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

export const store = configureStore({
  reducer: {
    AuthenticationReducer: authenticationreducer,
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
