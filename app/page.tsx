"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { getGoogleAuthURL } from "@/lib/oauth";

interface User {
  name: string;
  email: string;
  picture: string;
}

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const url = new URL(window.location.href);
    const userParam = url.searchParams.get("user");

    if (userParam) {
      const decoded = JSON.parse(decodeURIComponent(userParam));
      sessionStorage.setItem("user", JSON.stringify(decoded));
      setUser(decoded);
      url.searchParams.delete("user");
      window.history.replaceState({}, "", url.pathname);
    } else {
      const stored = sessionStorage.getItem("user");
      if (stored) {
        setUser(JSON.parse(stored));
      }
    }
  }, []);

  const handleLogin = () => {
    window.location.href = getGoogleAuthURL();
  };

  return (
    <main style={{ background: "#121212", minHeight: "100vh" }}>
      <Header />
      <div style={{ padding: "2rem", color: "white", textAlign: "center" }}>
        {!user ? (
          <>
            <h1>Sign in with Google</h1>
            <button
              onClick={handleLogin}
              style={{
                padding: "0.5rem 1.5rem",
                marginTop: "1rem",
                backgroundColor: "#4285F4",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontSize: "1rem",
                cursor: "pointer"
              }}
            >
              Login with Google
            </button>
          </>
        ) : (
          <div>
            <h2>Welcome, {user.name}!</h2>
            <img
              src={user.picture}
              alt="Profile"
              style={{ borderRadius: "50%", width: 100, margin: "1rem auto" }}
            />
            <p>Email: {user.email}</p>
          </div>
        )}
      </div>
    </main>
  );
}
