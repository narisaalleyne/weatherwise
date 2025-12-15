"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const WeatherCard = dynamic(() => import("../../components/WeatherCard"), {
  loading: () => <p className="text-center">Loading weather...</p>,
});

export default function CityPage() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmittedCity(city);
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-emerald-700">City Weather Information 🌍</h1>

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

      {submittedCity && (
        <div className="mt-4">
          <WeatherCard city={submittedCity} />
        </div>
      )}
    </main>
  );
}