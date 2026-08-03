import { createSlice } from "@reduxjs/toolkit";

const developerSlice=createSlice({
    name:"developer",
    initialState:{
        bookMarks:[],
        applications:[],
        likeStartups:[],
        search:'',
        filter:"All"
    },
    reducers:{
        bookmarkStartup:()=>{},
        removeBookmark:()=>{},
        applyStartup:()=>{},
        withdrawApplication:()=>{},
        likeStartup:()=>{},
        unlikeStartup:()=>{},
    }
})

export const {bookmarkStartup,removeBookmark,applyStartup,withdrawApplication,likeStartup,unlikeStartup}=developerSlice.actions
export default developerSlice.reducer
