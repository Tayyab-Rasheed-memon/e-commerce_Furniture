import React from 'react'; 

const Newsletter = () => {
  return (
    <div id="S" className="bg-gray-100 p-10 mt-[150px]">
      <h2 id="T" className="text-2xl font-bold mb-4">Or Subscribe To The Newsletter</h2>
      <div id="U" className="flex items-center">
        <input
          type="email"
          placeholder="Email Address..."
          id="V"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button id="W" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-4">
          SUBMIT
        </button>
      </div>
      <h3 id="X" className="text-xl font-bold mt-8">Follow Products And Discounts On Instagram</h3>
      <div id="Y" className="grid grid-cols-6 gap-4 mt-4">
        <img
          src="/eee.png"
          alt="Chair 1"
          id="Z"
          className="rounded-md"
        />
        <img
          src="/Image (8).png"
          alt="Chair 2"
          id="AA"
          className="rounded-md"
        />
        <img
          src="/Image (1).png"
          alt="Chair 3"
          id="AB"
          className="rounded-md"
        />
        <img
          src="/Image (2).png"
          alt="Chair 4"
          id="AC"
          className="rounded-md"
        />
        <img
          src="/Image (4).png"
          alt="Chair 5"
          id="AD"
          className="rounded-md"
        />
        <img
          src="/Image (6).png"
          alt="Chair 6"
          id="AE"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default Newsletter;
