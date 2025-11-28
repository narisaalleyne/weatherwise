
"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        background: "#1e90ff",
        color: "white",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/favourites">Favourites</Link>
      <Link href="/city">City Page</Link>
    </nav>
  );
}
