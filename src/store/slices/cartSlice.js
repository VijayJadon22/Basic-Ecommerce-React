import { createSlice } from "@reduxjs/toolkit";

const loadCartItemsFromLocalStorage = () => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : [];
}

const saveCartToStorage = (cart) => {
    localStorage.setItem("cartItems", JSON.stringify(cart))
}

const cartSlice = createSlice({
    name: "cart",
    initialState: { items: loadCartItemsFromLocalStorage() },
    reducers: {
        addToCart: (state, action) => {
            const product = state.items.find((item) => item.id === action.payload.id);
            if (product) {
                product.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            saveCartToStorage(state.items);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
            saveCartToStorage(state.items);
        },
        updateQuantity: (state, action) => {
            const product = state.items.find((item) => item.id === action.payload.id);
            if (product) {
                if (action.payload.type === "Increment") {
                    product.quantity += 1;
                }
                if (action.payload.type === "Decrement") {
                    product.quantity = Math.max(1, product.quantity - 1);
                }

            }
            saveCartToStorage(state.items);
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem("cartItems");
        }
    },

})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

