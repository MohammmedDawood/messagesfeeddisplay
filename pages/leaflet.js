import Footer from "../components/footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";

var LeafletCustomMap = dynamic(
  () => import("../components/leaflet/leafletcustommap"),
  { ssr: false }
);

export default function Leaflet() {
  return (
    <div className={styles.container}>
      <Link href="/" exact>
        <a>
          <h2>&larr; Back </h2>
        </a>
      </Link>
      <h1 className={styles.header}>Using leaf let</h1>

      <LeafletCustomMap />
      <Footer />
    </div>
  );
}
