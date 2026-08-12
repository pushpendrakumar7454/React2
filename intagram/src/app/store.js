import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/state/authUser'

export const store = configureStore({
    reducer: {
        auth: authReducer
    }

})