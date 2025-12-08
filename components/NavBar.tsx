"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname(); // Highlight active page

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Favourites", path: "/favourites" },
    { name: "City Page", path: "/city" },
  ];

  return (
    <nav className="w-full bg-blue-600 text-white py-4 shadow-lg">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        {/* Logo / Brand Name */}
        <h1 className="text-2xl font-semibold">WeatherWise</h1>

        {/* Navigation Links */}
        <div className="flex gap-6 text-lg">
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
