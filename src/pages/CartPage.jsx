import React from "react"; // Importing React for component rendering
import { useDispatch, useSelector } from "react-redux"; // Importing Redux hooks for state management
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../store/slices/cartSlice.js"; // Importing actions to modify cart state
import { FaTrash } from "react-icons/fa"; // Importing trash icon for the remove button

const CartPage = () => {
  const dispatch = useDispatch(); // Hook to send actions to Redux store
  const cart = useSelector((state) => state.cart.items); // Accessing cart items from Redux store

  console.log(cart); // Debugging: Logging cart data in console
  const totalPrice = cart?.reduce((total, item) => {
    const subTotal = item.price * item.quantity;
    total += subTotal;
    return total;
  }, 0);
  return (
    <div className="p-4 mb-4">
      {/* Page Heading */}
      <h1 className="text-center text-3xl m-4 font-bold">Cart</h1>

      {/* Cart Items Container */}
      <div className="w-full">
        {cart.map((item) => (
          <div
            key={item.id}
            className="lg:w-4xl mx-auto flex items-center justify-between border border-gray-300 rounded-lg p-4 shadow-md bg-white m-2"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-10 h-10 object-cover rounded-md"
            />

            {/* Product Info */}
            <div className="flex-1 px-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500">${item.price}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center space-x-2">
              {/* Decrease Quantity Button */}
              <button
                className="px-2 py-1 cursor-pointer bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => {
                  dispatch(updateQuantity({ type: "Decrement", id: item.id }));
                }}
              >
                -
              </button>

              {/* Display Current Quantity */}
              <p className="w-12 text-center border border-gray-300 rounded-md">
                {item.quantity}
              </p>

              {/* Increase Quantity Button */}
              <button
                className="px-2 py-1 cursor-pointer bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => {
                  dispatch(updateQuantity({ type: "Increment", id: item.id }));
                }}
              >
                +
              </button>
            </div>

            {/* Remove Button */}
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 ml-2 cursor-pointer"
              onClick={() => {
                dispatch(removeFromCart({ id: item.id }));
              }}
            >
              <FaTrash size={15} />
            </button>
          </div>
        ))}
      </div>
      <div className="lg:w-4xl mx-auto flex items-center justify-between border border-gray-300 rounded-lg p-4 shadow-md bg-white m-2">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 ml-2 cursor-pointer"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPage; // Exporting CartPage component for use in routing
