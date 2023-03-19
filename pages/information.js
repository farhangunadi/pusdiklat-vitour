import React, { Suspense } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, OrbitControls, Stage, Stats } from "@react-three/drei";
import styles from "../styles/Info.module.css";
import { Parkiran } from "../components/Asset Environment/Parkiran";
import { Physics } from "@react-three/cannon";
import { BaseSceneInfo } from "../components/ui/BaseSceneInfo";
import { GdPelayanan } from "../components/Asset Environment/GdPelayananLowPoly";
import { Wisma } from "../components/Asset Environment/Wisma1";
import { MasjidLowPoly } from "../components/Asset Environment/MasjidLowPoly";
import { Wisma2 } from "../components/Asset Environment/Wisma2";
import { SportCenter } from "../components/Asset Environment/Sportcenter";
import { NavigationBar } from "../components/Navbar/NavigationBar";

function information() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className={styles.superContainer}>
        <Container className={styles.wrapContent}>
          <div className={styles.wrapHeader}>
            <a href="/" className={styles.backBtn}>
              Back
            </a>
            <h1 className={styles.title}>Informasi Fasilitas Bangunan</h1>
          </div>
          <Row className={styles.rowContent}>
            <Col className={styles.contentCol}>
              <div className={styles.content}>
                <h1>Tempat Parkir</h1>
                <p>
                  Tempat Parkir terletak di samping gedung pelayanan, fasilitas
                  yang tersedia diantaranya pantry, APAR, serta tempat parkit
                  motor itu sendiri
                </p>
              </div>
            </Col>
            <Col className={styles.contentCol}>
              <BaseSceneInfo>
                <Parkiran position={[0, 0, 0]} scale={1} />
              </BaseSceneInfo>
            </Col>
          </Row>
          <Row className={styles.rowContent}>
            <Col className={styles.contentCol}>
              <BaseSceneInfo>
                <GdPelayanan />
              </BaseSceneInfo>
            </Col>
            <Col>
              <div className={styles.content}>
                <h1>Gedung Pelayanan</h1>
                <p>
                  Gedung pelayanan berfungsi sebagai pusat aktivitas unit
                  manajemen training serta pusat pelayanan terkait Pusdiklat Ir
                  H Djuanda. di Gedung Pelayanan terdapat fasilitas diantaranya
                  APAR, Studio, Ruang kerja, Kamar Mandi, dan Lobby pelayanan.
                  Gedung Pelayanan terletak didepan gedung kenyamanan.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={styles.rowContent}>
            <Col>
              <div className={styles.content}>
                <h1>Wisma</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti labore quidem earum blanditiis ullam numquam dolorum
                  cumque obcaecati qui quas voluptatum nostrum eius magnam cum
                  illo, animi quae nulla iusto.
                </p>
              </div>
            </Col>
            <Col className={styles.contentCol}>
              <BaseSceneInfo>
                <Wisma />
              </BaseSceneInfo>
            </Col>
          </Row>
          <Row className={styles.rowContent}>
            <Col className={styles.contentCol}>
              <BaseSceneInfo>
                <MasjidLowPoly scale={0.7} />
              </BaseSceneInfo>
            </Col>
            <Col>
              <div className={styles.content}>
                <h1>Masjid</h1>
                <p>
                  Masjid terletak di depan wisma ... dan disamping sport center.
                  Fasilitas yang ada di masjid diantaranya ... APAR, kamar
                  mandi, serta tempat ibadah itu sendiri.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={styles.rowContent}>
            <Col>
              <div className={styles.content}>
                <h1>Wisma Harina</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti labore quidem earum blanditiis ullam numquam dolorum
                  cumque obcaecati qui quas voluptatum nostrum eius magnam cum
                  illo, animi quae nulla iusto.
                </p>
              </div>
            </Col>
            <Col className={styles.contentCol}>
              <BaseSceneInfo>
                <Wisma2 />
              </BaseSceneInfo>
            </Col>
          </Row>
          <Row className={styles.rowContent}>
            <Col className={styles.contentCol}>
              <BaseSceneInfo>
                <SportCenter scale={0.7} />
              </BaseSceneInfo>
            </Col>
            <Col>
              <div className={styles.content}>
                <h1>Sport Center</h1>
                <p>
                  Sport Center merupakan tempat pusat fasilitas olahraga yang
                  ada di Pusdiklat Ir H Djuanda. Fasilitas yang tersedia di
                  sport center diantaranya lapangan bulu tangkis, lapangan
                  futsal, gym, ... APAR, Tenis Meja, dan Kamar mandi. Sport
                  Center terletak di samping masjid dan didepan gedung ketepatan
                  waktu.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default information;
