
import React from "react";
import Footer from "../components/robotics/home/Footer/Footer";
import Navbar from "../components/robotics/home/Header/Navbar/Navbar";
import Styles from "./past_coordinators.module.css";
import "./past_coordinators.module.css";

import { Container, Row, Col } from "react-bootstrap";


function Past_Coordinators(props) {
  var items = [];
  for(var i= 0;i < 5;i++){
      items.push(<>
          <div className={Styles.container}>
        
                  <img src="/images/robotics/body/cardimage.jpg" alt=" " className={Styles.img}/>

                  <h2 className={Styles.heading2}>Name</h2>

                  <p className={Styles.para}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illum tenetur harum ratione eum nisi praesentium vero sit molestias at, ad, necessitatibus non repellat inventore fugit quidem assumenda a labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ad reiciendis dolore reprehenderit sequi laboriosam praesentium laudantium vero sunt iste consequuntur, expedita odit velit necessitatibus blanditiis eligendi voluptas illo nesciunt.</p>
                          
          </div>
      
      </>);
  } 

  return (
    <div  className={Styles.body}>

     <Container>
      <Navbar className="nav" />
     </Container>  
     
     <section className="sec">
        
      <h1 className={Styles.heading}>Our Past Coordinators</h1> 
       {items}     

     </section>


     <div className={Styles.footer}>
      <Footer />
     </div> 
    </div>

     );
    }
    
    export default Past_Coordinators;
    
    