import type { Metadata } from "next";
// @ts-expect-error Type declaration for CSS modules not found
import "./globals.css";
import Navbar from "./components/Navbar";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Masterclass",
  description: "Learning Next.js from Zero to Hero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lobster.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
