import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/state/authUser'
import postReducer from '../features/posts/state/postSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer
    }

})