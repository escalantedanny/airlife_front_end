import React from 'react';
import {
    Row,
    Col
  } from "reactstrap";

const Pide = () => {
    return ( 
        <>
            <Row className="text-center mt-5 mb-5">
                <Col className="text-center d-none d-sm-none d-md-block">
                    <img 
                        className="img-fluid card-lift--hover"
                        width="auto" 
                        height="95"
                        alt="Certificaciones de la compañia" 
                        src={require("assets/images/pide_airlife.png")} />
                </Col>
            </Row>
        </>
     );
}
 
export default Pide;