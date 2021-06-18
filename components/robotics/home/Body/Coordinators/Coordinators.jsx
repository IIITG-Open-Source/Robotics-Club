import React from "react";
import Styles from "./coordinators.module.css";
import { Container, Row, Col } from "react-bootstrap";


function Coordinators() {
  return (
    <section id="coordinators">
      <Container>
        <h1 className={Styles.head}>Our Coordinators</h1>

        <Container className={Styles.innerCont}>
          <Row>
            <Col xl="4" className={Styles.col}>
              
              <img src="/images/robotics/body/cardimage.jpg" alt=" " className={Styles.coordinatorImg}/>
              <h2 >Coordinator 1</h2>
            </Col>
            <Col xl="4" className={Styles.col}>
              
              <img src="/images/robotics/body/cardimage.jpg" alt=" " className={Styles.coordinatorImg}/>
              <h2 >Coordinator 1</h2>
            </Col>
            <Col xl="4" className={Styles.col}>
              
              <img src="/images/robotics/body/cardimage.jpg" alt=" " className={Styles.coordinatorImg}/>
              <h2 >Coordinator 1</h2>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Coordinators;
