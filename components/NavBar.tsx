"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Favourites", path: "/favourites" },
    { name: "City Page", path: "/city" },
  ];

  return (
    <nav className="w-full bg-blue-600 text-white py-4 shadow-lg transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-semibold">WeatherWise</h1>

        <div className="flex gap-6 items-center text-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`hover:text-yellow-300 transition 
                ${pathname === item.path ? "font-bold underline underline-offset-4" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}