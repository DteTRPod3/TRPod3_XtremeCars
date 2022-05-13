import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/User";

const initialState: { user: User; isAuthenticated: boolean; error: string } = {
  user: {
    name: "",
    contact: "",
    address: "",
    pincode: "",
    email: "",
    password: "",
  },
  isAuthenticated: false,
  error: "",
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
    login: (state = initialState, action: any) => {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          email: action.payload.email,
          password: action.payload.password,
          name: action.payload.name,
          contact: action.payload.contact,
          pincode: action.payload.pincode,
          address: action.payload.address,
        },
        error: "",
      };
    },
    signup: (state = initialState, action: any) => {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          email: action.payload.email,
          password: action.payload.password,
          name: action.payload.name,
          contact: action.payload.contact,
          pincode: action.payload.pincode,
          address: action.payload.address,
        },
        error: "",
      };
    },
    logout: (state = initialState) => {
      return {
        ...state,
        isAuthenticated: false,
        user: {
          name: "",
          contact: "",
          address: "",
          pincode: "",
          email: "",
          password: "",
        },
        error: "",
      };
    },
    userError: (state = initialState, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});

export default AuthenticationSlice.reducer;
export const { authentication, signup, login, logout, userError } =
  AuthenticationSlice.actions;
