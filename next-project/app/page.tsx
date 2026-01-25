

import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Hello, Next.js! 🚀</h1>
      <p>I am learning to become a Full-Stack Developer.</p>

      <nav style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <Link href="/about" style={{ color: "blue", textDecoration: "underline" }}>
          About Page
        </Link>
        <Link href="/contact" style={{ color: "blue", textDecoration: "underline" }}>
          Contact Page
        </Link>
        <Link href="/projects/my-first-app" style={{ color: "blue", textDecoration: "underline" }}>
          View Project (Dynamic)
        </Link>
      </nav>
    </div>
  );
}
