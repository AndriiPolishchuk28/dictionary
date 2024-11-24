import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "./operations";
import { IUser } from "./types";

export interface UserState {
  user: IUser;
  loading: boolean;
  error: string | null;
  loggedIn: boolean;
  token: string | undefined;
}

const initialState: UserState = {
  user: {
    name: "",
    email: "",
  },
  loading: false,
  error: null,
  loggedIn: false,
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.token = payload.token;
        state.loading = false;
        state.loggedIn = true;
      })
      .addCase(signUp.rejected, (state) => {
        state.loading = false;
        state.error = "Some error with the server";
      });
  },
});

export const userReducer = userSlice.reducer;
