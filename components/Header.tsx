"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      padding: "1rem",
      backgroundColor: "#1f1f1f",
      color: "#fff",
      textAlign: "center",
      borderBottom: "1px solid #333"
    }}>
      <Link href="/" style={{ textDecoration: "none", color: "#fff" }}>
        <h1 style={{ cursor: "pointer" }}>CS391 OAuth Demo</h1>
      </Link>
    </header>
  );
}
