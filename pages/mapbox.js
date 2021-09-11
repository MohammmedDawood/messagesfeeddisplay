import Footer from "../components/footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import MapboxCustomMap from "../components/mapbox/mapboxcustommap";

export default function Leaflet() {
  return (
    <div className={styles.container}>
      <Link href="/" exact>
        <a>
          <h2>&larr; Back </h2>
        </a>
      </Link>
      <h1 className={styles.header}>Using Mapbox</h1>

      <MapboxCustomMap />
      <Footer />
    </div>
  );
}
