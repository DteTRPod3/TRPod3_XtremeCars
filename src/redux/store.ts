import { configureStore } from "@reduxjs/toolkit";
import { compose } from "redux";

import authenticationreducer from "./Authentication/reducer";
import comparecarreducer from "./CompareCars/CompareCarsSlice"
import comparecardetailslice from "./CompareCarsDetails/CompareCarsDetailsSlice"
import  carsListSlice from './CarsList/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: { 
    AuthenticationReducer: authenticationreducer,
    CompareCarReducer: comparecarreducer,
    CompareCarsDetailsSlice:comparecardetailslice,
    carsListReducer: carsListSlice
  },
});
