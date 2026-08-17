import { configureStore } from "@reduxjs/toolkit"; 
import authReducer from '../featores/auth/state/authReducer'

export const store=configureStore({
    reducer:{
        auth:authReducer
    }
})