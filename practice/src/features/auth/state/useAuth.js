import { createSlice } from "@reduxjs/toolkit";
import { userLoginAction } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    isAuthenticated: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isAuthenticated = true;
    },
    removeUser: (state) => {
      state.user = null;
      state.isLoading = true;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builders) => {
    (builders
     .addCase(userLoginAction.pending,(state,action)=>{
      state.isLoading=true
     })
     .addCase(userLoginAction.fulfilled,(state,action)=>{
      state.user=action.payload
      state.isLoading=false
      state.isAuthenticated=true
     })
     .addCase(userLoginAction.rejected,(state,action)=>{
      state.isLoading=false
     })
    );
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
