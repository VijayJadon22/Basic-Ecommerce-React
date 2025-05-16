import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Navigation bar container */}
      <nav className="bg-gray-800 w-full">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Left section of the navbar (Logo & Links) */}
            <div className="flex flex-1 ml-3 items-center sm:items-stretch sm:justify-start">
              {/* Logo container */}
              <div className="flex shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://pnghq.com/wp-content/uploads/2023/02/harry-potter-golden-snitch-png-6960-768x431.png"
                  alt="Company"
                />
              </div>

              {/* Navigation links */}
              <div>
                <div className="flex space-x-4">
                  {/* Home link */}
                  <Link
                    to={"/"}
                    className="rounded-md ml-4 px-3 py-2 text-md font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Home
                  </Link>
                </div>
              </div>
            </div>

            {/* Right section of the navbar (Cart link) */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Cart link */}
              <div className="relative ml-3">
                <Link
                  to={"/cart"}
                  className="rounded-md  px-3 py-2 text-md font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
