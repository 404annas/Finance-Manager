import React from 'react';
import { UserRoundSearch, BellDot, LogOut } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-[80%] h-screen flex flex-col px-10 py-4 bg-gray-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between w-full mb-6">
        {/* Search Box */}
        <div className="flex items-center gap-4 bg-gray-100 px-4 py-2.5 rounded-xl w-[80%]">
          <UserRoundSearch size={20} className="text-gray-500" />
          <input
            className="w-full p-regular bg-transparent outline-none"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* Right Section (Icons + Avatar) */}
        <div className="flex items-center gap-4">
          <button className="bg-purple-100 p-3 rounded-xl hover:bg-purple-200 transition duration-300 cursor-pointer">
            <BellDot size={20} className="text-[#6667DD]" />
          </button>
          <button className="bg-gray-100 p-3 rounded-xl hover:bg-gray-200 transition duration-300 cursor-pointer">
            <LogOut size={20} className="text-gray-600" />
          </button>
          <img
            loading="lazy"
            className="w-12 h-12 object-cover rounded-full border-2 border-gray-200"
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww"
            alt="User"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
