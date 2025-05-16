import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="bg-gray-800 w-full">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 ml-3 items-center  sm:items-stretch sm:justify-start">
              <div class="flex shrink-0 items-center">
                <img
                  class="h-8 w-auto"
                  src="https://pnghq.com/wp-content/uploads/2023/02/harry-potter-golden-snitch-png-6960-768x431.png"
                  alt="Company"
                />
              </div>
              <div class="">
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Home
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              
              <div class="relative ml-3">
                <a
                  href="#"
                  class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
