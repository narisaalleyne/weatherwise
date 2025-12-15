"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import SearchBar from "../components/SearchBar";

const WeatherCard = dynamic(() => import("../components/WeatherCard"), {
  loading: () => <p className="text-center">Loading weather...</p>,
});

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("");

  function handleSearch(city: string) {
    setSelectedCity(city);
  }

  const popularCities = ["Toronto", "New York", "London", "Tokyo"];

  return (
    <div className="space-y-8">
      <section className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-slate-700">
          Welcome to WeatherWise 🌦
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Search any city around the world to get real-time weather details.
        </p>
      </section>

      <section className="flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </section>

      <section className="text-center">
        <h2 className="text-xl font-semibold mb-3 text-emerald-700">Popular Cities</h2>
        <div className="flex justify-center gap-3 flex-wrap">
          {popularCities.map((city) => (
            <button
              key={city}
              onClick={() => handleSearch(city)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              {city}
            </button>
          ))}
        </div>
      </section>

      {selectedCity && (
        <section className="flex justify-center">
          <WeatherCard city={selectedCity} />
        </section>
      )}
    </div>
  );
}