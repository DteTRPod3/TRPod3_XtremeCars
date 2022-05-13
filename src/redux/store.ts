import { configureStore } from "@reduxjs/toolkit";
import { compose } from "redux";
import comparecarreducer from "./CompareCars/reducer"
import comparecardetailslice from "./CompareCarsDetails/reducer"
import authenticationreducer from "./authentication/reducer";
import carsListSlice from "./CarsList/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: { 
    authenticationReducer: authenticationreducer,
    CompareCarReducer: comparecarreducer,
    CompareCarsDetailsSlice:comparecardetailslice,
    carsListReducer: carsListSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
