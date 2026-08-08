
import {createSlice} from '@reduxjs/toolkit'

const productSlice=createSlice({
    name:"product",
    initialState:{
        product:[],
        isLoading:false
    },
    reducers:{
        increase:()=>{},
        descrease:()=>{},
        delete:()=>{}
    }
})