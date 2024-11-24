import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import { IUser } from "./types";

axios.defaults.baseURL = BASE_URL;

export const signUp = createAsyncThunk<IUser, IUser, { rejectValue: string }>(
  "signUp",
  async (userData, thunkApi) => {
    try {
      const response = await axios.post<IUser>("/users/signup", userData);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  }
);
