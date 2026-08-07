import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated:false,
        isLoading:false
    },
    reducers:{
        addUser:()=>{},
        removeUser:()=>{}
    }
})
export const {addUser,removeUser}=authSlice.actions
export default authSlice.reducer