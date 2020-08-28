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
                    <h1 className="lether">Certificaciones Internacionales</h1> 
                    <h1 className="lether">en Resultado, Diseño y Fabricaci&oacute;n</h1>
                </Col>
            </Row>
            <Row className="mr-4 ml-5 text-center mt-10">
                <Col>
                    <Image className="card-lift--hover" alt="Certificaciones de la compañia" src={require("assets/images/certificacion/1.png")} />
                    <Image className="card-lift--hover" alt="Certificaciones de la compañia" src={require("assets/images/certificacion/3.png")} />
                    <Image className="card-lift--hover" alt="Certificaciones de la compañia" src={require("assets/images/certificacion/4.png")} />
                    <Image className="card-lift--hover" alt="Certificaciones de la compañia" src={require("assets/images/certificacion/5.png")} />
                    <Image className="card-lift--hover" alt="Certificaciones de la compañia" src={require("assets/images/certificacion/6.png")} />
                    <Image className="card-lift--hover" alt="Certificaciones de la compañixpa" src={require("assets/images/certificacion/7.png")} />
                    <Image className="card-lift--hover" alt="Certificaciones de la compañia" src={require("assets/images/certificacion/2.png")} />
                </Col>
            </Row>
            <Row>
                <Contacto />
            </Row>
        </>
     );
}
 
export default Certificaciones;