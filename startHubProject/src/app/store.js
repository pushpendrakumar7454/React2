import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import startupSlice from '../features/startup/startupSlice'
import developerSlice from '../features/developer/developerSlice'

export const store=configureStore({
    reducer:{
        auth:authReducer,
        startup:startupSlice,
        developer:developerSlice
    }
})