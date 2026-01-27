"use client"; // <--- This is REQUIRED for useState

import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "About Us | Next.js Masterclass",
  description: "We are learning Next.js routing!",
};

export default function AboutPage() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>About Us</h1>
      <p>We are learning Next.js routing!</p>
      <div style={{ padding: "20px", border: "2px dashed red", marginTop: "20px" }}>
        <h2>Client Component (Interactive)</h2>
        <p>Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          style={{ padding: "10px", background: "black", color: "white" }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
