"use client";

import { useState } from "react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (city: string) => void;
}) {
  const [city, setCity] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-md"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-60"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
}
