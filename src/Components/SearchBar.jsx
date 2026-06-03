import React, { useState } from "react";

function SearchBar({ OnSurch }) {
  const [inputeValue, setInputValue] = useState("");

  function SubmitHandler(e) {
    e.preventDefault();
    OnSurch(inputeValue);

    setInputValue("");
  }
  return (
    <>
      <form // Form acts as the main wrapper. Using max-w to keep it looking good on
        onSubmit={SubmitHandler}
        className="flex w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto bg-white rounded-full shadow-md overflow-hidden border border-gray-200 transition-shadow duration-300 focus-within:shadow-xl items-center"
      >
        <input
          type="text"
          value={inputeValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search City..."
          required
          className="flex-1 px-6 py-4 md:px-8 md:text-lg lg:px-10 lg:text-xl text-gray-700 bg-transparent outline-none placeholder-gray-400"
          maxLength={15}
        />

        <button
          type="submit"
          className="px-4 py-4 md:px-10 lg:px-12 bg-gray-400 text-white font-bold text-xl sm:text-base transition-all duration-300  active:scroll-auto h-full rounded-xl"
        >
          Search
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-2 text-center">
        * For best results, please enter a specific City name.
      </p>
    </>
  );
}

export default SearchBar;
