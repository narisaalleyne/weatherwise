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

  return (
    <main>
      <h1>Your Favourite Cities ⭐</h1>

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Add a city..."
        style={{ marginRight: "0.5rem", padding: "0.4rem" }}
      />
      <button onClick={addCity} style={{ padding: "0.4rem" }}>
        Add
      </button>

      {favourites.length === 0 ? (
        <p>No favourite cities yet...</p>
      ) : (
        <ul>
          {favourites.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
