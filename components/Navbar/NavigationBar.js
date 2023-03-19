import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavigationBar.module.css";

export const NavigationBar = () => {
  return (
    <>
      <Navbar
        sticky="top"
        className={styles.navParent}
        bg="#090617"
        variant="dark"
      >
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link className={styles.link_nav} href="/">
              Home
            </Nav.Link>
            <Nav.Link className={styles.link_nav} href="/information">
              Information
            </Nav.Link>
            <Nav.Link className={styles.link_nav} href="/gameplay">
              Virtual Tour
            </Nav.Link>
            <Nav.Link className={styles.link_nav} href="/about">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
