import React from "react";

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: "Library Stool Chair", price: "$99", image: "/Image (8).png" },
    { id: 2, name: "Modern Sofa", price: "$249", image: "/Image (3).png" },
    { id: 3, name: "Armchair Comfort", price: "$199", image: "/dsdd.jpg" },
    { id: 4, name: "Wooden Bench", price: "$159", image: "/Image (6).png" },
    { id: 5, name: "Stylish Desk Chair", price: "$129", image: "/Image (4).png" },
  ];

  return (
    <div className="container mx-auto py-12 mt-[150px] px-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">FEATURED PRODUCTS</h2>
        <a
          href="/products"
          className="text-blue-500 hover:underline transition-colors duration-300"
        >
          View all
        </a>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.price}</p>
            <a
              href={`/product/${product.id}`} // Link to individual product page
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;






















// import React from "react";

// const FeaturedProducts = () => {
//   const products = [
//     { id: 1, name: "Library Stool Chair", price: "$99", image: "/Image (8).png" },
//     { id: 2, name: "Modern Sofa", price: "$249", image: "/Image (3).png" },
//     { id: 3, name: "Armchair Comfort", price: "$199", image: "/dsdd.jpg" },
//     { id: 4, name: "Wooden Bench", price: "$159", image: "/Image (6).png" },
//     { id: 5, name: "Stylish Desk Chair", price: "$129", image: "/Image (4).png" },
//   ];

//   return (
//     <div className="container mx-auto py-12 mt-[150px] px-4">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-bold">FEATURED PRODUCTS</h2>
//         <a href="/products" className="text-blue-500 hover:underline">
//           View all
//         </a>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-lg shadow-md p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//             <p className="text-gray-600">{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;
