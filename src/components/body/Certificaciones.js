import React from 'react';
import Contacto from './Contacto';
import {
    Row,
    Col
  } from "reactstrap";
  import { Image } from 'react-bootstrap';

const Certificaciones = () => {
    return ( 
        <>
            <Row className="my-5"></Row>
            <Row className="my-5">
                <Col className="mb-5 mb-md-0 text-center " md="12">
                    <h1 className="lether">Certificaciones Internacionales en resultado, diseño y fabricaci&oacute;n</h1>
                </Col>
            </Row>
            <Row className="mr-4 ml-5 text-center mt-10">
                <Col>
                    <Image className="card-lift--hover" alt="Certificaciones de la compañia" src={require("assets/images/Certificaciones/certi1.png")} />
                    <Image className="card-lift--hover" alt="Certificaciones de la compañia" src={require("assets/images/Certificaciones/certi3.png")} />
                    <Image className="card-lift--hover" alt="Certificaciones de la compañia" src={require("assets/images/Certificaciones/certi4.png")} />
                    <Image className="card-lift--hover" alt="Certificaciones de la compañia" src={require("assets/images/Certificaciones/certi5.png")} />
                    <Image className="card-lift--hover" alt="Certificaciones de la compañia" src={require("assets/images/Certificaciones/certi6.png")} />
                    <Image className="card-lift--hover" alt="Certificaciones de la compañia" src={require("assets/images/Certificaciones/certi7.png")} />
                    <Image className="card-lift--hover" alt="Certificaciones de la compañia" src={require("assets/images/Certificaciones/certi2.png")} />
                </Col>
            </Row>
            <Row>
                <Contacto />
            </Row>
        </>
     );
}
 
export default Certificaciones;