import {createSlice} from '@reduxjs/toolkit'

const authSlice=createSlice(
    {
        name:"auth",
        initialStat:{
            user:null,
            isLoading:true,
            error:null,
             isAuthenticated:false,
        },reducers:{
            addUser:(state,action)=>{
                state.user=action.payload
                state.isLoading=false
                state.isAuthenticated=true
            },
            removeUser:(state,action)=>{
                state.user=null
                state.isLoading=true
                state.isAuthenticated=false
            }
        }
    }
)

export const {addUser,removeUser} =authSlice.actions
export default authSlice.reducer