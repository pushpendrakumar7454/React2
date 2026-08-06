import { createAsyncThunk } from "@reduxjs/toolkit";
import {axiosInstanceApi} from "../../../config/axiosInstance"

export const userLoginAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkapi) => {
    try {
      let res = await axiosInstanceApi.post("/auth/login", credentials);
      console.log(res.data);
      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data;
    } catch (error) {
       return thunkapi.rejectWithValue("login failed")
    }
  },
);