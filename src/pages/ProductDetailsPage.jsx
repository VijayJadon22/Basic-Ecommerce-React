import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../store/slices/cartSlice";

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);
  const { id } = useParams();
  console.log(id);
  const product = items.find((item) => item.id === Number(id));

  useEffect(() => {
    if (items.length === 0) {
      navigate("/");
    }
  }, [items.length, navigate]);
    
  return (
    <>
      {product && (
        <div className="w-2xl border border-gray-100 shadow-2xl rounded-xl flex flex-col items-center justify-around m-4 p-4">
          <img src={product.image} alt={product.title} width="150" />
          <h2 className="text-xl">{product.title}</h2>
          <p className="text-sm">{product.description}</p>
          <p>${product.price}</p>
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

export default ProductDetailsPage;
