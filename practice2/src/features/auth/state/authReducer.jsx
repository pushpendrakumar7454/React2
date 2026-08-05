import { createSlice } from "@reduxjs/toolkit";

export const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated:false,
        isLoading:true
    },
    reducers:{
        addUser:(state,action)=>{
            state.user=action.payload
            state.isAuthenticated=true
            state.isLoading=false
        },
        removeUser:(state,action)=>{
            state.user=null
            state.isAuthenticated=false
            state.isLoading=true
        }
    }
})

export const {addUser,removeUser}=authSlice.actions
export default authSlice.reducer