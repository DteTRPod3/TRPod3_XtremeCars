import { configureStore } from "@reduxjs/toolkit";
import { compose } from "redux";
import wishList from "./WishList/reducer";
import authenticationreducer from "./Authentication/reducer";
import carsListSlice from "./CarsList/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: {
    AuthenticationReducer: authenticationreducer,
    carsListReducer: carsListSlice,
    wishListReducer: wishList,
  },
});
export type RootState = ReturnType<typeof store.getState>;
