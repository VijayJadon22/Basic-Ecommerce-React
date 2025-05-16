import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/slices/cartSlice.js";
import { FaTrash  } from "react-icons/fa";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);
  return (
    <div className="p-4 mb-4">
      <h1 className="text-center text-3xl m-4 font-bold">Cart</h1>
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
              <button
                className="px-2 py-1 cursor-pointer"
                onClick={() => {
                  dispatch(updateQuantity({ type: "Decrement", id: item.id }));
                }}
              >
                -
              </button>
              <p className="w-12 text-center border border-gray-300 rounded-md">
                {item.quantity}
              </p>

              <button
                className="px-2 py-1 cursor-pointer"
                onClick={() => {
                  dispatch(updateQuantity({ type: "Increment", id: item.id }));
                }}
              >
                +
              </button>
            </div>

            {/* Remove Button */}
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 ml-2"
              onClick={() => {
                dispatch(removeFromCart({ id: item.id }));
              }}
            >
              <FaTrash size={15}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
