import React from "react";
import Navbar from "./Navbar/Navbar";
import HeaderBody from "./Header-Body/Header-Body";
import Styles from "./header.module.css";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <Container className={Styles.Header} fluid>
      <Container className={Styles.Header}>
        <Navbar />
        <HeaderBody />
      </Container>
    </Container>
  );
}

export default Header;
