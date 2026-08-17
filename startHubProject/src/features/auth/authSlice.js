import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated:false
    },reducers:{
        addUser:(state,action)=>{
            state.isAuthenticated=true
            state.user=action.payload
        },
        removeUser:(state,action)=>{
            state.isAuthenticated=false;
            state.user=null
        }
    }
})

export const {addUser,removeUser}=authSlice.actions
export default authSlice.reducer