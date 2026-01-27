import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>Home</Link>
      <Link href="/about" className={styles.link}>About</Link>
      <Link href="/contact" className={styles.link}>Contact</Link>
      <Link href="/projects/my-first-app" className={styles.link}>Projects</Link>
    </nav>
  );
}