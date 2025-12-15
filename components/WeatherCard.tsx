"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type WeatherData = {
  city: string;
  temperature: string;
  condition: string;
  icon: string;
  message: string;
};

export default function WeatherCard({ city }: { city: string }) {
  const [data, setData] = useState<WeatherData>({
    city: "",
    temperature: "",
    condition: "",
    icon: "",
    message: "",
  });

  useEffect(() => {
    async function loadWeather() {
      try {
        const url = "/api/weather?city=" + encodeURIComponent(city);
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      } catch (error) {
        setData({
          city,
          temperature: "--",
          condition: "Error",
          icon: "",
          message: "Failed to load weather data.",
        });
      }
    }

    if (city) loadWeather();
  }, [city]);

  return (
    <div className="bg-white text-black rounded-xl shadow-lg p-5 w-72 text-center border border-blue-100 transition-colors duration-300">
      {!data.city ? (
        <p className="text-gray-500">Loading weather...</p>
      ) : (
        <>
          <h3 className="text-xl font-semibold mb-2">{data.city}</h3>

          <div className="flex flex-col items-center gap-1 mb-3">
            {data.icon && (
              <Image
                src={data.icon}
                alt={data.condition}
                width={80}
                height={80}
              />
            )}
            <p className="text-lg">{data.condition}</p>
            <p className="text-2xl font-bold text-blue-500">{data.temperature}</p>
          </div>

          <p className="text-sm text-gray-500">{data.message}</p>
        </>
      )}
    </div>
  );
}