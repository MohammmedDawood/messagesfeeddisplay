import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <h1 className={styles.description}>
            Sorting and Visualizing MessagesFeed
          </h1>
          <Link href="/googlemap">
            <a className={styles.card}>
              <h2>Google Map &rarr;</h2>
              <p className={styles.linkparagraph}>
                Integrate Google Maps APIs with Next.js features using
                google-map-react to display message feeds as markers.
              </p>
            </a>
          </Link>
          <Link href="/leaflet">
            <a className={styles.card}>
              <h2>Leaflet &rarr;</h2>
              <p className={styles.linkparagraph}>
                Integrate Leaflet APIs with Next.js features using
                google-map-react to display message feeds as markers.
              </p>
            </a>
          </Link>
        </div>
        <Footer />
      </main>
    </div>
  );
}
