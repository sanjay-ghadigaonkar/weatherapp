import React from "react";

function SearchBar() {
  return (
    // Form acts as the main wrapper. Using max-w to keep it looking good on large screens.
    <form className="flex w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-full shadow-md overflow-hidden border border-gray-200 transition-shadow duration-300 focus-within:shadow-xl   ">
      <input
        type="text"
        placeholder="Search City..."
        className="flex-1 w-full px-5 py-3 sm:px-6 sm:py-4   text-gray-700 bg-transparent outline-none text-sm sm:text-base placeholder-gray-400"
      />

      <button
        type="submit"
        className="px-9 py-6 sm:px-8 sm:py-4 bg-gray-400  text-white font-bold text-sm sm:text-base transition-all duration-300 active:scale-100 ml-12 rounded-b-xl"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
