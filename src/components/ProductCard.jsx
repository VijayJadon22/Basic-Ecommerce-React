import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className="p-2 border border-gray-100 shadow-xl shadow-gray-400 rounded-lg flex flex-col justify-around items-center hover:scale-105 transition-all smooth duration-500">
      <img src={product.image} alt={product.title} width="100" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>
        ⭐ {product.rating.rate} ({product.rating.count} reviews)
      </p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};
export default ProductCard;
