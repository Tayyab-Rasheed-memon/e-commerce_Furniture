import React from "react";

function Top_Header() {
  return (
    <div className="flex flex-wrap justify-between items-center bg-[#272343] text-white py-2 px-5 text-sm font-sans">
      {/* Left Section */}
      <div className="flex items-center">
        <p className="m-0">&#10003; Free Shipping On All Orders Over $50</p>
      </div>
      {/* Right Section */}
      <div className="flex gap-4 mt-2 sm:mt-0">
        <p className="m-0 cursor-pointer hover:underline">Eng</p>
        <p className="m-0 cursor-pointer hover:underline">FAQs</p>
        <p className="m-0 cursor-pointer hover:underline">Need Help</p>
      </div>
    </div>
  );
}

export default Top_Header;
