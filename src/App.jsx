import React from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import WeatherCart from "./Components/WeatherCart";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("Boisar");
  const [temprechar, setTemprechar] = useState(32);
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="m-5 md:m-18    ">
        <SearchBar />
      </div>

      <div className="m-6 md:m-16 lg:m-20   ">
        <WeatherCart City={city} Temprecher={temprechar} />
      </div>
    </>
  );
}

export default App;
