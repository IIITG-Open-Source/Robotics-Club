import React from "react";
import Styles from "./events.module.css";
import { Container, Row, Button } from "react-bootstrap";
import Item from './Item';



function Events() {

  var eventArr = ["Card Title","This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action"];

  var items = [];
  if(eventArr){
    for(var i=0;i<3;i++){
      items.push(<Item />)
    }
  }else{
    for(var j=0;j<3;j++){
      items.push(<Item />)
    }
  }
  return (
    <section id="events">
        <h1 className={Styles.heading}>Events</h1>
        <Container fluid className={Styles.grid}>
                <Row>
                    {items}
                </Row>
                <Button className={Styles.button} href="/events">Show More</Button>
        </Container>
    </section>
  );
}

export default Events;
