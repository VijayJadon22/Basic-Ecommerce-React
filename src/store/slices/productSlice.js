import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state for the product slice
const initialState = {
    items: [],   // Stores the list of products
    loading: false, // Indicates if data is being fetched
    error: null  // Stores any errors that occur during data fetching
};

// Async thunk for fetching products from an API
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",  // Action name
    async () => {
        // Making an API request to fetch product data
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data; // Returning data when request is successful
    }
);

// Creating a product slice using createSlice
const productSlice = createSlice({
    name: "products", // Slice name
    initialState, // Initial state defined above
    reducers: {}, // No synchronous reducers for now

    // Handling async actions using extraReducers
    extraReducers: (builder) => {
        builder
            // Handles API call when it's in the "pending" state
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true; // Set loading state to true while fetching
            })

            // Handles API success response when products are fetched
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload; // Store fetched products in state
                state.loading = false; // Set loading state to false
            })

            // Handles API failure response when fetching fails
            .addCase(fetchProducts.rejected, (state, action) => {
                state.error = action.error.message; // Store the error message
                state.loading = false; // Set loading state to false
            });
    }
});

// Exporting the slice reducer to be used in the Redux store
export default productSlice.reducer;
