import Image from "next/image";
import styles from "../styles/Home.module.css";
import GoogleCustomMap from "../components/google-custom-map1";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.header}>Using Google maps</h1>
        <GoogleCustomMap />
      </main>

      {/* <footer className={styles.header}>
        <h1> Created By Dawood</h1>
      </footer> */}
    </div>
  );
}
