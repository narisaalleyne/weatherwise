"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (city: string) => void }) {
  const [city, setCity] = useState("");

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        style={{ padding: "0.5rem", width: "200px" }}
      />
      <button
        onClick={() => onSearch(city)}
        style={{ padding: "0.5rem", marginLeft: "0.5rem", cursor: "pointer" }}
      >
        Search
      </button>
    </div>
  );
}
