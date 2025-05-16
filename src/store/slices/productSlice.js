import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    loading: false,
    error: null
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
    }
})

export default productSlice.reducer;


