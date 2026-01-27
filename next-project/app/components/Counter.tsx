"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
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
  );
}
