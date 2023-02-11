import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./INITIAL_STATE";
import * as types from "./types";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<types.State>) => {
      return { ...action.payload, loggedIn: true };
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
