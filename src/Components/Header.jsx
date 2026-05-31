import React from "react";

function Header() {
  return (
    <header className="flex flex-row items-center justify-between w-full px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm sm:px-10 sm:py-6 md:px-16 lg:px-24 rounded-b-2xl md:rounded-none">
      <h1 className="text-2xl font-extrabold tracking-tight bg-clip-text text-gray-600 from-blue-600 to-indigo-600 sm:text-3xl md:text-4xl">
        WeatherApp
      </h1>

      <i className="text-3xl sm:text-4xl md:text-5xl drop-shadow-md text-yellow-500 hover:scale-110 transition-transform duration-300 cursor-pointer">
        ☀️
      </i>
    </header>
  );
}

export default Header;
