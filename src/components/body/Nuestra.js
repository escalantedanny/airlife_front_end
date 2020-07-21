import React from 'react';
import {
    Row,
    Col,
    Container
  } from "reactstrap";

const Nuestra = () => {
    return ( 
        <>
        <Container>
            <Row className="mt-5 mb-5">
                <Col className="mb-1 mb-md-0" md="6">
                    <Row className="align-items-center justify-content-md-between" >
                        <Col className="mb-5 mb-md-0 text-center " md="12">
                            <h1 className="lether">Nuestra Tecnolog&iacute;a</h1>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="mb-5 mb-md-0 text-center " md="12">
                            <p>Nuestra tecnología se basa en la y ionización de una pequeña cantidad de oxígeno contenido en el aire, por medio de una descarga eléctrica de bajo consumo que genera oxígeno ionizado, el cual, al salir al ambiente a tratar, elimina por destrucción y no por captura, todo tipo de organismos patógenos presentes en el aire de recirculación, en las paredes de los conductos y las superficies del habitáculo.</p>
                        </Col>
                    </Row>
                </Col>
                <Col className="mb-1 mb-md-0" md="6">
                    <img
                        className="img-fluid"
                        width="700" 
                        height="200"
                        align="center"
                        alt="Certificaciones de la compañia" src={require("assets/images/infografia2.png")} 
                        />
                </Col>
            </Row>
        </Container>
    </>
     );
}
 
export default Nuestra;