import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../../config/apiInstance";

export const userLoginAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkapi) => {
    try {
      let res = await apiInstance.post("/auth/login", credentials);
      console.log(res.data);
      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkapi.rejectWithValue("login failed");
    }
  },
);

export const hreadUserAction = createAsyncThunk(
  "hyredUser",
  async (_, thunkapi) => {
    const token = localStorage.getItem("accessToken");
    try {
      let res = await apiInstance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);

      return res.data;
    } catch (error) {
       return thunkapi.rejectWithValue("login faild")
    }
  },
);
