import React from "react";
import Styles from "./footer.module.css";
import { Container, Row, Col, Button} from "react-bootstrap";
import {FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";
//import { Link,  BrowserRouter as Router  } from "react-router-dom";

function Footer(props){
    return <div  className={Styles.heading}>
        <Container>
            <Row>
                <Col className={`${Styles.col} ${Styles.logoImg}`}>
                    <img src="/images/robotics/footer/rc-removebg-preview.png" alt=" " className={Styles.logo} />
                </Col>
                <Col className={Styles.col}>
                    
                        <Link href="/events">
                            <h3 className={Styles.item}>Events</h3>
                        </Link>
                         
                        <h3 className={Styles.item}>Gallery</h3>
                        <Link href="#contact">
                            <h3 className={Styles.item}>Contact Us</h3>
                        </Link>
                        <Link href="#coordinators">
                            <h3 className={Styles.item}>Coordinators</h3>
                        </Link>
                        <Link href="/past_coordinator">
                        <h3 className={Styles.item}>Past Coordinators</h3>
                        </Link>
                        
                    
                </Col>
                <Col className={`${Styles.col} ${Styles.followUs}`}>
                    <h1>Follow Us</h1>
                    <FaFacebook className={Styles.icon}/>
                    <FaInstagram className={Styles.icon}/>
                    <FaGithub className={Styles.icon}/>
                </Col>
            </Row>
            <p className={Styles.copyright}>Copyrights @ Indian Intitute Of Information Technology, Guwahati</p>
        </Container>
    </div>
}

export default Footer;