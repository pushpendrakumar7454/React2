import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isLoading: false
    },
    reducers: {
        adduser: (state, action) => {
            state.user = action.payload
            state.isLoading = false
        },
        removeUser: (state) => {
            state.user = null
            state.isLoading = true
        }
    }
})
export const { adduser, removeUser } = authSlice.actions
export default authSlice.reducer