import { createSlice } from "@reduxjs/toolkit";

const initialState: { authenticated: number } = {
  authenticated: 0,
};

export const AuthenticationSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    authentication: (state = initialState, action: any) => {
      const authenticated =
        action.payload.password === "L#(qc{f}TaJu4%4k" ? 1 : 2;
      return { ...state, authenticated };
    },
  },
});

export default AuthenticationSlice.reducer;
export const { authentication } = AuthenticationSlice.actions;
