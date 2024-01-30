import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartList:[],
}

const cartSlice = createSlice({
    name:'carts',
    initialState,
    reducers:{
        addToCart: (state, {payload})=>{
            state.cartList = [...state.cartList, payload];
        },
        editCartList: (state, {payload})=>{
            state.cartList = payload;
        }
    }
})

export const {addToCart,editCartList} = cartSlice.actions;
export default cartSlice.reducer;

