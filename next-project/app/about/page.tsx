import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Next.js Masterclass",
  description: "We are learning Next.js routing!",
};

export default function AboutPage() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>About Us</h1>
      <p>We are learning Next.js routing!</p>
    </div>
  );
}
