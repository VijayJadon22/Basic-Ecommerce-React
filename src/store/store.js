import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice.js";
import cartReducer from "./slices/cartSlice.js";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
})

export default store;