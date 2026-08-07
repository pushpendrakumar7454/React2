import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../../config/apiInstance";

export const loginUserAction = createAsyncThunk(
  "login/auth",
  async (credential, thunkapi) => {
    try {
      const res = await apiInstance.post("/auth/login", credential);
      localStorage.setItem("accessToken", res.data.accessToken);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkapi.rejectWithValue("login faild");
    }
  },
);

export const hydredUseraction = createAsyncThunk(
  "hydredUser",
  async (_, thunkapi) => {
    const token = localStorage.getItem("accessToken");
    try {
      const res = await apiInstance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return thunkapi.rejectWithValue("Unauthorized user");
    }
  },
);
