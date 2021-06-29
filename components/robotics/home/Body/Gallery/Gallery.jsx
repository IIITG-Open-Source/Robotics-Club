import React from "react";
import Styles from "./gallery.module.css";
import { Container, Row, Button } from "react-bootstrap";

function Gallery() {
    return <section id="gallery">
        <h1 className = {Styles.mainHeading}>Gallery</h1>
    </section>;
}

export default Gallery;