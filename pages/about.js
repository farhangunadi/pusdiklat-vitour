import React from "react";
import { NavigationBar } from "../components/Navbar/NavigationBar";
import styles from "../styles/About.module.css";

function About() {
  return (
    <div className={styles.superContainer}>
      <NavigationBar />
      <div className={styles.container}>
        <h1 className={styles.title}>Abous this Website</h1>
        <p className={styles.desc}>
          Website virtual tour Pusdiklat Ir H Djuanda merupakan website media
          informasi dan virtualisasi dari denah pusdiklat. Website ini
          dikembangkan dengan tujuan sebagai alat bantu dalam mengetahui
          fasilitas yang ada di Pusdiklat Ir H Djuanda.
        </p>
      </div>
    </div>
  );
}

export default About;
