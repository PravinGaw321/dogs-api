import { createSlice } from "@reduxjs/toolkit";

const initialState={
    historyList:[],
}

const historySlice = createSlice({
    name:"history",
    initialState,
    reducers:{
        setImageHistory: (state, {payload})=>{
            state.historyList = [...state.historyList, payload];
        }
    }
})

export const { setImageHistory } = historySlice.actions;
export default historySlice.reducer;