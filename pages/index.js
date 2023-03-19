import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

//component
import { NavigationBar } from "../components/Navbar/NavigationBar";

//assets image
import vectorVR from "../assets/vr 1.jpg";
export default function Home() {
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
      <NavigationBar />
      <section className={styles.landing_page}>
        <Container className={styles.wrap_content}>
          <Row>
            <Col className={styles.content1}>
              <h1 className={styles.title1}>PUSDIKLAT</h1>
              <h2 className={styles.title2}>Virtual Tour Experience</h2>
              <Link href="/gameplay" className={styles.link_btn_play}>
                <button className={styles.btn_play}>Play</button>
              </Link>
            </Col>
            <Col className={styles.content2}>
              <Image
                src={vectorVR}
                alt="VR Model"
                quality={100}
                className={styles.content_img}
              />
            </Col>
          </Row>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
        </Container>
      </section>
    </>
  );
}
