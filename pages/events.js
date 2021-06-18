import React from "react";
import {Col, Row, Container} from "react-bootstrap";
import Footer from "../components/robotics/home/Footer/Footer";
import Styles from "./events.module.css";
import Navbar from "../components/robotics/home/Header/Navbar/Navbar";

function Events(props) {

    var items = [];
    for(var i= 0;i < 6;i++){
        items.push(<React.Fragment>
            <div className={Styles.container}>
            <Row>
                <Col>
                    <img src="/images/robotics/body/cardimage.jpg" alt=" " className={Styles.img}/>
                </Col>
                <Col>
                    <p>Lorem Ipsum</p>
                </Col>
            </Row>              
        </div>
        <br/>
        </React.Fragment>);

    }
    

    return (
        <div  className={Styles.body}>
        <Container>
            <Navbar />
        </Container>       
            <h1 className={Styles.heading}>Upcoming Events</h1>
            {items}
            
            <h1 className={Styles.heading}>Past Events</h1>
            {items}
            <div className={Styles.footer}>
            <Footer />
            </div>
        
        </div>
    )
}

export default Events;