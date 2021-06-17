import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Styles from './item.module.css';

function Item(props) {
    return (
        <Col md={4} className={Styles.entry}>
            <Card className={Styles.card} variant="flush">
                <React.Fragment>
                    <Card.Img src='https://images.unsplash.com/photo-1622405468748-a3ebd9fa0e7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt="Card image" className={Styles.image} />
                    <Card.ImgOverlay as={motion.div} className={Styles.overlay} whileHover={{
                        opacity: 1,
                        transition: { duration: 0.2 },
                    }}>
                        <Card.Body className={Styles.content}>
                            <Card.Title as="h1" className={Styles.heading}>Hello</Card.Title>
                        </Card.Body>
                    </Card.ImgOverlay>
                </React.Fragment>
            </Card>
        </Col>
    );
}

export default Item;