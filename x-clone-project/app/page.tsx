import styles from "./page.module.scss";
import HomePage from "@/components/HomePage";
import  Link from "next/link";

export default function Home() {
  return (
      <main className={styles.main}>
        <HomePage />
      </main>
  );
}