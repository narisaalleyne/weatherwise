"use client";

import { useEffect, useState } from "react";
import { getWeatherPlaceholder } from "../app/api/weather-placeholder";

export default function WeatherCard({ city }: { city: string }) {
  const [data, setData] = useState({
    temperature: "",
    condition: "",
    icon: "",
    message: "",
  });

  useEffect(() => {
    async function load() {
      const result = await getWeatherPlaceholder(city);
      setData(result);
    }
    load();
  }, [city]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 w-72 text-center border border-blue-100 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {data.city}
      </h3>

      <div className="flex flex-col items-center gap-1 mb-3">
        <p className="text-4xl">{data.icon}</p>
        <p className="text-lg font-medium text-gray-700">
          {data.condition}
        </p>
        <p className="text-2xl font-bold text-blue-500">
          {data.temperature}
        </p>
      </div>

      <p className="text-gray-500 text-sm mb-3">{data.message}</p>

      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
        Add to Favourites ⭐
      </button>
    </div>
  );
}
