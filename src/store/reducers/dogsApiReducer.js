import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const callDogsAPi = createAsyncThunk('call-dogs-api', async()=>{
    try{
        const response = await axios.get(`https://dog.ceo/api/breeds/image/random`);
        return response.data;
    }
    catch(err){
        console.log(err);
    }
})

export const dogsAPiSlice=createSlice({
    name:'dogsAPi',
    initialState:{},
    reducers:{}
})

export default dogsAPiSlice.reducer;