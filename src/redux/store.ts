import { configureStore } from "@reduxjs/toolkit";
import { compose } from "redux";
import wishList from "./WishList/reducer";
import authenticationreducer from "./Authentication/reducer";
import comparecarreducer from "./CompareCars/reducer";
import comparecardetailslice from "./CompareCarsDetails/reducer";
import CartReducer from "./Cart/CartSlice";
import carsListSlice from "./CarsList/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    authenticationReducer: authenticationreducer,
    compareCarReducer: comparecarreducer,
    compareCarsDetailsSlice: comparecardetailslice,
    carsListReducer: carsListSlice,
    wishListReducer: wishList,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
