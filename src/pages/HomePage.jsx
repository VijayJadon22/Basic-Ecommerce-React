import React, { useEffect } from "react"; // Importing React and useEffect for lifecycle management
import { fetchProducts } from "../store/slices/productSlice"; // Importing action to fetch products from Redux slice
import { useDispatch, useSelector } from "react-redux"; // Importing hooks for dispatching actions and selecting state
import ProductCard from "../components/ProductCard"; // Importing product card component
import LoadingSpinner from "../components/LoadingSpinner"; // Importing a loading spinner component

const HomePage = () => {
  // Extracting data from Redux store
  const { items, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // Fetch products when component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]); // Ensuring fetchProducts only runs when dispatch changes

  return (
    <>
      {/* Page container with centered alignment */}
      <div className="flex flex-col items-center">
        {/* Page heading */}
        <h1 className="text-center text-3xl m-4 font-bold">Products</h1>

        {/* Main content area */}
        <div className="w-full flex justify-center items-center p-5">
          {/* Conditional rendering: Show spinner if loading, else display products */}
          {loading ? (
            <LoadingSpinner />
          ) : (
            // Grid layout for displaying product cards
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl">
              {/* Mapping through products to render each product card */}
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

export default HomePage; // Exporting HomePage component for use in routes
