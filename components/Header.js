import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-gray-100 shadow-md ">
      <h1 className="px-3 py-3.5 font-serif text-gray-700 text-3xl hover:bg-gray-200 cursor cursor-pointer">
        KnownOrigin.
      </h1>
      <div className="px-3 py-3.5 cursor-pointer text-gray-700 hover:bg-gray-200 cursor">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
