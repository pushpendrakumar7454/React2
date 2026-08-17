import { createSlice } from "@reduxjs/toolkit";
import { hydredUseraction, loginUserAction } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    removeUser: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(hydredUseraction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(hydredUseraction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(hydredUseraction.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
