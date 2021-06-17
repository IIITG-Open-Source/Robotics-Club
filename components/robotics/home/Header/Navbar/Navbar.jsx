import React from "react";
// import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Styles from "./navbar.module.css";

function Navbar_robotics() {
  return (
    <Navbar bg="#5cdb95" expand="lg" className={Styles.navbar}>
      <Navbar.Brand href="#home">
        <img src="/images/robotics/header/rc-removebg-preview.png" alt="Logo" className={Styles.logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className={Styles.navlink}>
            Home
          </Nav.Link>
          <Nav.Link href="#about" className={Styles.navlink}>
            About
          </Nav.Link>
          <Nav.Link href="#events" className={Styles.navlink}>
            Events
          </Nav.Link>
          <Nav.Link href="#coordinators" className={Styles.navlink}>
            Coordinators
          </Nav.Link>
          <Nav.Link href="#link" className={Styles.navlink}>
            Gallery
          </Nav.Link>
          <Nav.Link href="#contact" className={Styles.navlink}>
            Contact us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar_robotics;
