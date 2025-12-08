"use client";

import { useState } from "react";
import WeatherCard from "../../components/WeatherCard";

export default function CityPage() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmittedCity(city);
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">City Weather Information 🌍</h1>
      <p className="mb-6 text-lg text-gray-700">
        Use this page to check weather info for any city. (More features will be added in Phase 3!)
      </p>

      {/* City Input Form */}
      <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded-md flex-1"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Render WeatherCard AFTER submitting */}
      {submittedCity && (
        <div className="mt-4">
          <WeatherCard city={submittedCity} />
        </div>
      )}
    </main>
  );
}
