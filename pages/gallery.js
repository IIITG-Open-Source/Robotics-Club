import React from "react";
import Footer from "../components/robotics/home/Footer/Footer";
import Navbar from "../components/robotics/home/Header/Navbar/Navbar";
import Styles from "./gallery.module.css";
import "./gallery.module.css";

import { Container, Row, Col } from "react-bootstrap";

function Gallery(props) {
    var items = [];
    for(var i= 0;i < 12;i++){

        items.push(<>    
                       
                    <img src="/images/robotics/body/cardimage.jpg" alt=" " className={Styles.img}/>  

                  </>);      

        } 
        
    return (
        <div  className={Styles.body}>
    
         <Container>
          <Navbar className="nav" />
         </Container>  
         
         <section className="sec">
            
          <h1 className={Styles.heading}>Image Gallery</h1> 
           {items}     
    
         </section>
    
    
         <div className={Styles.footer}>
          <Footer />
         </div> 
        </div>
    
         );
        }
        
        export default Gallery;
        