"use client";

import { useState } from "react";

export default function Favourites() {
  const [favourites, setFavourites] = useState<string[]>([]);
  const [city, setCity] = useState("");

  function addCity() {
    if (city.trim() === "") return;

    if (!favourites.includes(city)) {
      setFavourites([...favourites, city]);
    }

    setCity("");
  }

  function removeCity(name: string) {
    setFavourites(favourites.filter((c) => c !== name));
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Your Favourite Cities ⭐</h1>

      {/* City Input */}
      <div className="flex gap-3 mb-6">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Add a city..."
          className="border p-2 rounded-md flex-1"
        />
        <button
          onClick={addCity}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      {/* Favourites List */}
      {favourites.length === 0 ? (
        <p className="text-gray-600 text-lg">No favourite cities yet...</p>
      ) : (
        <ul className="space-y-3">
          {favourites.map((c, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 border rounded-md"
            >
              <span className="font-medium">{c}</span>

              <button
                onClick={() => removeCity(c)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
