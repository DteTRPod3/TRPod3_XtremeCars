import { configureStore } from "@reduxjs/toolkit";
import { compose } from "redux";

import authenticationreducer from "./Authentication/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: { AuthenticationReducer: authenticationreducer },
});
