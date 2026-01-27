import Image from "next/image"; // <--- Import this
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Hello, Next.js! 🚀</h1>
      <p>I am learning to become a Full-Stack Developer.</p>

      {/* Client Component */}
      <Counter />

      {/* Optimized Image */}
      <div style={{ marginTop: "20px" }}>
        <Image 
          src="https://picsum.photos/600/400" 
          alt="Random placeholder" 
          width={600} 
          height={400} 
          priority 
          style={{ borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}
