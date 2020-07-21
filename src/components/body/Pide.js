import React from 'react';
import {
    Row,
    Col,
    Container
  } from "reactstrap";

const Pide = () => {
    return ( 
        <>
                <Row className="text-center mt-5 mb-5">
                    <Col>
                        <img 
                            className="img-fluid"
                            width="auto" 
                            height="100"
                            align="center"
                            className="card-lift--hover" 
                            alt="Certificaciones de la compañia" 
                            src={require("assets/images/pide_airlife.png")} />
                    </Col>
                </Row>
        </>
     );
}
 
export default Pide;