import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        employee: null,
        isLoading: false
    },
    reducers: {
        addEmloyee: (state, action) => {
            state.user = action.payload
            state.isLoading = false
        },
        removeEmployee: (state) => {
            state.user = null
            state.isLoading = false
        }
    }
})
export const { addEmloyee, removeEmployee } = authSlice.actions
export default authSlice.reducer