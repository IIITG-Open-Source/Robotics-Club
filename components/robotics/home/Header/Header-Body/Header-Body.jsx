import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "./header-body.module.css";


function Header_Body() {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h1 className={Styles.clubHeading}>
              R<img src="/images/robotics/header/PngItem_2926749.png" alt="Robo" className={Styles.roboheading} />
              b<img src="/images/robotics/header/PngItem_2926749.png" alt="Robo" className={Styles.roboheading} />
              tics Club
            </h1>
            <p className={Styles.headingtextalign}> Some description</p>
          </Col>
          <Col xl="6">
            <img src="/images/robotics/header/Drone_Flatline (1).png" alt="Robo" className={Styles.headerImage} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Header_Body;
