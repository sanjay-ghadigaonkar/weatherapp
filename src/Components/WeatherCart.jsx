import React from "react";

const WeatherCart = ({ City, Temprecher, Humidity, Wind }) => {
  return (
    <div
      className="bg-white   p-6 rounded-3xl shadow-xl w-80  md:w-4xl  md:max-h-screen max-w-full border border-gray-100 mt-6 mx-auto md:m-6
     lg:max-w-full  "
    >
      {/* city icpme section  */}

      <div className="text-balance">
        <h2 className="text-2xl font-extrabold text-gray-900  tracking-wider ">
          {City}
        </h2>
        <div className="text-7xl my-6">☀️</div>
      </div>

      {/*  Temperature Section ) */}

      <div className="text mb-8">
        <h2 className=" text-5xl font-extrabold text-gray-900 ">
          {` ${Temprecher}°C`}
        </h2>
        <p className="text-lg text-gray-500 font-medium mt-2">Sunny</p>
      </div>

      {/*Humidity & Wind Section (Flexbox Magic)  */}
      <div className=" flex justify-between items-center bg-blue-50 p-4 rounded-2xl">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 font-semibold">Humidity</span>
          <span className=" text-lg font-bold text-gray-700 mt-1">
            {Humidity}
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 font-semibold">Wind</span>
          <span className=" text-lg font-bold text-gray-700 mt-1">
            {`${Wind}km/h`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCart;
