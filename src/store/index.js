import { configureStore } from '@reduxjs/toolkit'
import dogsApiReducer from './reducers/dogsApiReducer';
import cartReducer from './reducers/cartReducer';
import historyReducer from './reducers/historyReducer';

const store = configureStore({
    reducer:{
        dogsAPi: dogsApiReducer,
        carts: cartReducer,
        history: historyReducer,
    }
})

export default store;


