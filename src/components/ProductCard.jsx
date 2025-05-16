import React from "react"; // Importing React for component rendering
import { Link } from "react-router-dom"; // Importing Link from React Router for navigation

// ProductCard Component - Displays individual product details
const ProductCard = ({ product }) => {
  return (
    // Container for the product card with styling and hover effects
    <div className="p-2 border border-gray-100 shadow-xl shadow-gray-400 rounded-lg flex flex-col justify-around items-center hover:scale-105 transition-all duration-500">
      {/* Product Image */}
      <img src={product.image} alt={product.title} width="100" />

      {/* Product Title */}
      <h3 className="font-semibold text-center mb-2">{product.title}</h3>

      {/* Product Price */}
      <p className="text-sm">${product.price}</p>

      {/* Product Rating */}
      <p className="text-sm">
        ⭐ {product.rating.rate} ({product.rating.count} reviews)
      </p>

      {/* Button to View Product Details - Navigates to product-specific page */}
      <Link
        className="bg-gray-700 px-2 py-1 text-sm rounded-lg text-white mt-2"
        to={`/product/${product.id}`}
      >
        View Details
      </Link>
    </div>
  );
};

// Exporting the ProductCard component for use in other parts of the application
export default ProductCard;
