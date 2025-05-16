import React from "react";
import Navbar from "./components/Navbar.jsx"; // Importing the Navbar component
import { Route, Routes } from "react-router-dom"; // Importing Route and Routes from React Router
import HomePage from "./pages/HomePage"; // Importing the Home Page component
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx"; // Importing Product Details Page
import CartPage from "./pages/CartPage.jsx"; // Importing Cart Page
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {/* Navbar Component - Displayed at the top of all pages */}
      <Navbar />

      {/* Main content container - Centers the Routes */}
      <div className="flex items-center justify-center">
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<HomePage />} />

          {/* Dynamic Route for product details - Uses ":id" to fetch specific product */}
          <Route path="/product/:id" element={<ProductDetailsPage />} />

          {/* Route for the shopping cart page */}
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App; // Exporting App component to be used in index.js
