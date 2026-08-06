import { createSlice } from "@reduxjs/toolkit";
import { userLoginAction } from "./authAction";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: true,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLoginAction.pending, (state, action) => {
        state.isLoading=true
      })
      .addCase(userLoginAction.fulfilled,(state,action)=>{
        state.user=action.payload
        state.isLoading=false
        state.isAuthenticated=true

      })
      .addCase(userLoginAction.rejected,(state,action)=>{
        state.isLoading=false
      });
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
