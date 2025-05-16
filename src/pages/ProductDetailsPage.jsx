import React, { useEffect } from "react"; // Importing React and useEffect for lifecycle handling
import { useDispatch, useSelector } from "react-redux"; // Importing hooks for Redux state management
import { useNavigate, useParams } from "react-router-dom"; // Importing navigation and parameter hooks
import { addToCart } from "../store/slices/cartSlice"; // Importing Redux action for adding items to the cart

const ProductDetailsPage = () => {
  const navigate = useNavigate(); // Hook to navigate between pages
  const dispatch = useDispatch(); // Hook to dispatch actions to Redux store
  const { items } = useSelector((state) => state.products); // Accessing the products state from Redux store
  const { id } = useParams(); // Extracting the product ID from the URL parameters
  console.log(id); // Logging the product ID for debugging

  // Finding the selected product by matching the URL parameter ID with existing products
  const product = items.find((item) => item.id === Number(id));

  // Redirecting the user back to the home page if product data is missing
  useEffect(() => {
    if (items.length === 0) {
      navigate("/");
    }
  }, [items.length, navigate]); // Runs when the items state changes

  return (
    <>
      {/* If the product exists, display its details */}
      {product && (
        <div className="w-2xl border border-gray-100 shadow-2xl rounded-xl flex flex-col items-center justify-around mt-10 m-4 p-4 text-center">
          {/* Product image */}
          <img src={product.image} alt={product.title} width="150" />

          {/* Product title */}
          <h2 className="text-xl">{product.title}</h2>

          {/* Product description */}
          <p className="text-sm my-1">{product.description}</p>

          {/* Product price */}
          <p className="my-1">${product.price}</p>

          {/* Button to add product to cart */}
          <button
            className="bg-blue-400 px-2 py-1 rounded-lg text-white cursor-pointer"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      )}
    </>
  );
};

export default ProductDetailsPage; // Exporting component for use in routing
