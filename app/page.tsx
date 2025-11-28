"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("");

  function handleSearch(city: string) {
    setSelectedCity(city);
  }

  return (
    <main>
      <h1>Welcome to WeatherWise 🌦️</h1>
      <p>Check the weather in any city.</p>

      {/* Search Component */}
      <SearchBar onSearch={handleSearch} />

      {/* Show Weather Card ONLY if a city is selected */}
      {selectedCity && <WeatherCard city={selectedCity} />}
    </main>
  );
}
