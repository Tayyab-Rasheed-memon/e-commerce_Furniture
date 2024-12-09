import React from 'react';

function Hero() {
  const products = [
    { id: "AX1", name: "Library Stool Chair", price: 20, image: "/card.png", badge: "New" },
    { id: "AX2", name: "Library Stool Chair", price: 20, originalPrice: 30, image: "/Image (1).png", badge: "Sale" },
    { id: "AX3", name: "Library Stool Chair", price: 20, image: "/item-category 1.png" },
    { id: "AX4", name: "Library Stool Chair", price: 20, image: "/item-category.png" },
    { id: "AX5", name: "Library Stool Chair", price: 20, image: "/Image (4).png", badge: "New" },
    { id: "AX6", name: "Library Stool Chair", price: 20, originalPrice: 25, image: "/card (1).png", badge: "Sale" },
    { id: "AX7", name: "Library Stool Chair", price: 20, image: "/Image (8).png" },
    { id: "AX8", name: "Library Stool Chair", price: 20, image: "/card.png" },
  ];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="uppercase text-sm tracking-wide text-gray-600 mb-4">Welcome to Chairy</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Best Furniture <br /> Collection For Your <br /> Interior.
          </h1>
          <button className="mt-6 bg-teal-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-teal-600 transition">
            Shop Now →
          </button>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img src="/Product Image.png" alt="Chair" className="rounded-lg shadow-md" />
        </div>
      </div>

      {/* Explicitly Added Image Tags for Logos */}
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-8 py-8">
        {/* <img src="/Logo (0).png" alt="Logo 0" className="h-[87px] w-[85px]" /> */}
        <img src="/Logo (1).png" alt="Logo 1" className="h-[87px] w-[85px]" />
        <img src="/Logo (2).png" alt="Logo 2" className="h-[87px] w-[85px]" />
        <img src="/Logo (3).png" alt="Logo 3" className="h-[87px] w-[85px]" />
        <img src="/Logo (4).png" alt="Logo 4" className="h-[87px] w-[85px]" />
        <img src="/Logo (5).png" alt="Logo 5" className="h-[87px] w-[85px]" />
        <img src="/Logo (6).png" alt="Logo 6" className="h-[87px] w-[85px]" />
      </div>

      <div className="container mx-auto px-6">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-8">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(({ id, name, price, originalPrice, image, badge }) => (
            <div key={id} className="bg-white shadow-md rounded-lg p-4 relative">
              <div className="relative">
                <img src={image} alt={name} className="rounded-lg" />
                {badge && (
                  <span
                    className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded ${
                      badge === "New" ? "bg-teal-500" : "bg-red-500"
                    } text-white`}
                  >
                    {badge}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-gray-800 font-semibold">{name}</h3>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-lg font-semibold text-teal-500">${price}</span>
                  {originalPrice && <span className="text-sm text-gray-400 line-through">${originalPrice}</span>}
                </div>
                <button className="mt-3 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded">
                  <img src="/Group.png" alt="Add to Cart" className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
