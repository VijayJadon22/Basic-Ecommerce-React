import { createSlice } from "@reduxjs/toolkit"; // Importing Redux Toolkit's createSlice function
import toast from "react-hot-toast"; // Importing toast notifications for user feedback

// Function to load saved cart items from local storage (persists cart data between sessions)
const loadCartItemsFromLocalStorage = () => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : []; // Parse stored data or return an empty array
}

// Function to save cart items to local storage (ensuring persistence)
const saveCartToStorage = (cart) => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
}

// Creating the cart slice using createSlice
const cartSlice = createSlice({
    name: "cart", // Slice name
    initialState: { items: loadCartItemsFromLocalStorage() }, // Load saved cart items from localStorage
    reducers: {
        // Function to add a product to the cart
        addToCart: (state, action) => {
            const product = state.items.find((item) => item.id === action.payload.id);
            if (product) {
                product.quantity += 1; // Increment quantity if product already exists
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); // Add new product to cart
            }
            saveCartToStorage(state.items); // Save updated cart data to local storage
            toast.success("Product added to cart!", { id: "addtocart" }); // Show success message
        },

        // Function to remove a product from the cart
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id); // Remove item from cart
            saveCartToStorage(state.items); // Update local storage
            toast.success("Product removed from cart!", { id: "removed" }); // Show success message
        },

        // Function to update product quantity (increase/decrease)
        updateQuantity: (state, action) => {
            const product = state.items.find((item) => item.id === action.payload.id);
            if (product) {
                if (action.payload.type === "Increment") {
                    product.quantity += 1; // Increase quantity
                }
                if (action.payload.type === "Decrement") {
                    product.quantity = Math.max(1, product.quantity - 1); // Ensure quantity doesn't go below 1
                }
            }
            saveCartToStorage(state.items); // Save updated cart data to local storage
        },

        // Function to clear the entire cart
        clearCart: (state) => {
            state.items = []; // Empty the cart
            localStorage.removeItem("cartItems"); // Remove cart data from local storage
            toast.success("Cart cleared successfully!", { id: "clear" }); // Show success message
        }
    },
});

// Exporting action creators for usage in components
export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// Exporting the reducer to be used in the Redux store
export default cartSlice.reducer;
