import { LoginStatus } from "../../models/LoginStatus";

import { createSlice } from "@reduxjs/toolkit";

const initialState: { authenticated: LoginStatus } = {
  authenticated: LoginStatus.LoggedOut,
};

export const AuthenticationSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    authentication: (state = initialState, action: any) => {
      const authenticated =
        action.payload.password === "L#(qc{f}TaJu4%4k"
          ? LoginStatus.LoginSuccess
          : LoginStatus.LoginFailed;
      return { ...state, authenticated };
    },
  },
});

export default AuthenticationSlice.reducer;
export const { authentication } = AuthenticationSlice.actions;
