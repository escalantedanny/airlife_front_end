import React from 'react';
import {
    Row,
    Col,
    Container
  } from "reactstrap";

const Banner = () => {
    return ( 
        <>
          <img 
            className="img-fluid"
            width="1900" 
            height="450"
            align="center"
            alt="Certificaciones de la compañia" 
            src={require("assets/images/Banner.png")}  
          />
        </>
     );
}
 
export default Banner;