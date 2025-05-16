import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className="p-2 border border-gray-100 shadow-xl shadow-gray-400 rounded-lg flex flex-col justify-around items-center hover:scale-105 transition-all smooth duration-500">
      <img src={product.image} alt={product.title} width="100" />
      <h3 className="font-semibold text-center mb-2">{product.title}</h3>
      <p className="text-sm">${product.price}</p>
      <p className="text-sm">
        ⭐ {product.rating.rate} ({product.rating.count} reviews)
      </p>
      <Link className="bg-gray-700 px-2 py-1 rounded-lg text-white mt-2" to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};
export default ProductCard;
