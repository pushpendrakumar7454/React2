import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../../../config/apiInstance";

export const loginEmployee = createAsyncThunk('auth/login', async(credecial, thunkapi) => {
    try {
        const res = await apiInstance.post("/auth/login")
        return res.data

    } catch (error) {
        return thunkapi.rejectWithValue(error)

    }
})