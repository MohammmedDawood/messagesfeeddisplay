import styles from "../styles/Home.module.css";
import GoogleCustomMap from "../components/googlemap/googlecustommap";
import Footer from "../components/footer";
import Link from "next/link";

export default function GoogleMap() {
  return (
    <div className={styles.container}>
      <Link href="/" exact>
        <a>
          <h2>&larr; Back </h2>
        </a>
      </Link>
      <h1 className={styles.header}>Using Google maps</h1>
      <GoogleCustomMap />
      <Footer />
    </div>
  );
}
