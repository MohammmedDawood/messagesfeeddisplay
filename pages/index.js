import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Sorting and Visualizing MessagesFeed</h1>
        <div className={styles.grid}>
          <Link href="/googlemap">
            <a className={styles.card}>
              <h2>Google Map &rarr;</h2>
              <p>
                Integrate Google Maps APIs with Next.js features using
                google-map-react to display message feeds as markers.
              </p>
            </a>
          </Link>
          <Link href="/leaflet">
            <a className={styles.card}>
              <h2>Leaflet &rarr;</h2>
              <p>
                Integrate Leaflet APIs with Next.js features using
                google-map-react to display message feeds as markers.
              </p>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
