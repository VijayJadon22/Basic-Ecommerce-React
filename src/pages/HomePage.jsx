import React, { useEffect } from "react";
import { fetchProducts } from "../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { items, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-center text-3xl m-4 font-bold">Products</h1>
        <div className="w-full flex justify-center items-center p-5">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-8 max-w-5xl">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
