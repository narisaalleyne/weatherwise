"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("");

  function handleSearch(city: string) {
    setSelectedCity(city);
  }

  const popularCities = ["Toronto", "New York", "London", "Tokyo"];

  return (
    <div className="space-y-8">

      {/* Hero Section */}
      <section className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to WeatherWise 🌦️
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Search any city around the world to get real-time weather details.
        </p>
      </section>

      {/* Search Bar */}
      <section className="flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </section>

      {/* Popular Cities */}
      <section className="text-center">
        <h2 className="text-xl font-semibold mb-3">Popular Cities</h2>

        <div className="flex justify-center gap-3 flex-wrap">
          {popularCities.map((city) => (
            <button
              key={city}
              onClick={() => handleSearch(city)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              {city}
            </button>
          ))}
        </div>
      </section>

      {/* WeatherCard (only after selecting a city) */}
      {selectedCity && (
        <section className="flex justify-center">
          <WeatherCard city={selectedCity} />
        </section>
      )}
    </div>
  );
}
