import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from "../features/tracker/trackerSlice.js";

export const store = configureStore({
  reducer: {
    tracker: trackerReducer,
  },
});