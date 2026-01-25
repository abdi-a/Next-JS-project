// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ 
      padding: "10px", 
      borderBottom: "1px solid #ddd", 
      background: "#f8f9fa",
      display: "flex",
      gap: "20px"
    }}>
      <Link href="/" style={{ fontWeight: "bold" }}>Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/projects/my-app">Projects</Link>
    </nav>
  );
}