import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      {/* Navbar Container */}
      <div id="AZ" className="flex justify-between items-center bg-gray-100 p-4 border-b border-gray-300">
        {/* Logo Section */}
        <div id="BA" className="flex items-center gap-3">
          <img src="/Logo Icon.png" alt="Sofa" className="w-8 h-8" />
          <h1 className="text-lg font-bold text-blue-900">Comforty</h1>
        </div>

        {/* Cart Section */}
        <div id="BB" className="relative">
          <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-1 hover:border-blue-900">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
              alt="Cart"
              className="w-5 h-5"
            />
            <span className="text-sm">Cart</span>
            <span className="absolute bg-teal-500 text-white text-xs font-bold rounded-full px-2 py-1 -top-2 -right-3">
              2
            </span>
          </button>
        </div>
      </div>

      {/* Links and Contact Section */}
      <div id="BC" className="flex flex-wrap justify-between items-center py-4 px-4 text-gray-700">
        {/* Navigation Links */}
        <div id="BD" className="flex flex-wrap gap-8">
          {/* Existing Links */}
          <Link
            href="/Home"
            id="BE"
            className="text-gray-700 hover:text-blue-900 transition-all duration-300 ease-in-out"
          >
            Home
          </Link>

          {/* New Links */}
          <Link
            href="/AboutUs"
            id="BF"
            className="text-gray-700 hover:text-blue-900 transition-all duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            href="/Products"
            id="BG"
            className="text-gray-700 hover:text-blue-900 transition-all duration-300 ease-in-out"
          >
            Product
          </Link>
          <Link
            href="/Contact"
            id="BH"
            className="text-gray-700 hover:text-blue-900 transition-all duration-300 ease-in-out"
          >
            Contact
          </Link>
          <Link
            href="/Bag"
            id="BI"
            className="text-gray-700 hover:text-blue-900 transition-all duration-300 ease-in-out"
          >
            Bag
          </Link>
        </div>

        {/* Contact Information */}
        <div id="BK" className="mt-2 sm:mt-0">
          <p>
            Contact: <strong className="text-blue-900">(808) 555-0111</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
