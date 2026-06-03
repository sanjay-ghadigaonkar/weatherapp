import React, { useEffect } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import WeatherCart from "./Components/WeatherCart";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("Palghar");
  const [temprechar, setTemprechar] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Naye States  for humidity and wind
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getWeatherData() {
      try {
        setIsLoading(true);
        setError(null);

        if (!navigator.onLine) {
          setError(
            "Bro internet band hai! please chake your WI-FI or Mobile Data",
          );
          setIsLoading(false);

          return;
        }

        if (city.trim().length < 2) {
          setError("TypeError : please Add a Minimum 2 Latters...");
          setIsLoading(false);
          return;
        }

        // recvest to aip
        const responce = await fetch(`https://wttr.in/${city}?format=j1`);

        // conver to coming data in json format
        const data = await responce.json();

        // console.log("pura api data", data);

        //  json temprecher extract and update state

        const curruntTemp = data.current_condition[0].temp_C;
        const currentHumidity = data.current_condition[0].humidity;
        const currentWind = data.current_condition[0].windspeedKmph;

        setTemprechar(curruntTemp);
        setHumidity(currentHumidity);
        setWind(currentWind);

        setIsLoading(false);
      } catch (error) {
        // any regan internet is close and api is fail , so catch the error
        setError(`${city} is not found`);

        // console.log("Data fetch karne mein error aaya:", error);
        setIsLoading(false);
      }
    }
    // i call the function getWeatherData();
    getWeatherData();
  }, [city]);

  function handleCityUpdate(newCityName) {
    setCity(newCityName);
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="m-5 md:m-18   ">
        <SearchBar OnSurch={handleCityUpdate} />
      </div>
      {/* for loading becouse data is slow rendring */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mx-auto w-3xl max-w-sm sm:max-w-3xs sm:max-h-screen rounded-r-lg shadow-sm mt-64">
          <p className="font-bold">Opps!</p>
          <p>{error}</p>
        </div>
      )}

      {isLoading && (
        <div className="flex justify-center items-center h-64 w-full mt-64">
          {/* <h2 className="text-2xl font-bold text-gray-500">
            Data is Comming... ⏳
          </h2> */}
          {/* this animation create by ai but i hands on this code  not a just copy paste */}
          <svg
            className="animate-spin h-12 w-12 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>

            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}

      {!error && !isLoading && (
        <div className="flex justify-center items-center mt-10 ">
          <WeatherCart
            City={city}
            Temprecher={temprechar}
            Humidity={humidity}
            Wind={wind}
          />
        </div>
      )}
    </>
  );
}

export default App;
