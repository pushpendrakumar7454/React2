import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/apiInstance";

export const loginEmployee = createAsyncThunk(
    "/api/auth/login",

    async(credentials, thunkApi) => {
        try {
            const res = await axiosInstance.post("/api/auth/login", credentials);
            console.log("LOGIN RESPONSE:", res.data);
            return res.data.data;

        } catch (error) {
            console.log("LOGIN ERROR:", error);

            return thunkApi.rejectWithValue("Login failed");
        }
    }
);

export const currentLoggedEmployee = createAsyncThunk(
    "api/auth/me",

    async(_, thunkApi) => {
        try {
            const res = await axiosInstance.get("/api/auth/me");
            console.log(res.data);

            return res.data.user;

        } catch (error) {
            console.log(error);
            return thunkApi.rejectWithValue("Unauthorized");
        }
    }
);