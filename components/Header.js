import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between bg-gray-100 shadow-sm lg:px-10">
        <h1
          onClick={() => router.push("/")}
          className="px-3 py-3.5 font-serif text-gray-700 text-3xl hover:bg-gray-200 cursor cursor-pointer"
        >
          KnownOrigin.
        </h1>

        <div className="hidden text-xl font-light tracking-tight text-gray-700 md:flex">
          <h1
            onClick={() => router.push("/marketplace")}
            className="px-2.5 py-3.5 cursor-pointer hover:bg-gray-200"
          >
            {" "}
            Marketplace 🔥
          </h1>
          <h1
            onClick={() => router.push("create-item")}
            className="px-2.5 py-3.5 cursor-pointer hover:bg-gray-200"
          >
            {" "}
            Sell Art
          </h1>
          <h1
            onClick={() => router.push("/creator-dashboard")}
            className="px-2.5 py-3.5 cursor-pointer hover:bg-gray-200"
          >
            {" "}
            Creator Dashboard
          </h1>
          <h1
            onClick={() => router.push("/my-assets")}
            className="px-2.5 py-3.5 cursor-pointer hover:bg-gray-200"
          >
            {" "}
            Purchased Art
          </h1>
        </div>

        <div
          onClick={() => setSidebar(!sidebar)}
          className="px-3 py-3.5 cursor-pointer text-gray-700 hover:bg-gray-200 md:hidden"
        >
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
      {/* Dropdown Menu */}
      <div className={sidebar ? "inline" : "hidden"}>
        <div className="py-2 text-xl font-light text-gray-700 bg-gray-100">
          <h1
            onClick={() => router.push("/marketplace")}
            className="px-3 py-2 cursor-pointer hover:bg-gray-200"
          >
            {" "}
            Marketplace 🔥
          </h1>
          <h1
            onClick={() => router.push("/create-item")}
            className="px-3 py-2 cursor-pointer hover:bg-gray-200"
          >
            {" "}
            Sell Art
          </h1>
          <h1
            onClick={() => router.push("/creator-dashboard")}
            className="px-3 py-2 cursor-pointer hover:bg-gray-200"
          >
            {" "}
            Creator Dashboard
          </h1>
          <h1
            onClick={() => router.push("/my-assets")}
            className="px-3 py-2 cursor-pointer hover:bg-gray-200"
          >
            {" "}
            Purchased Art
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
