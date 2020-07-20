import React from 'react';
import {
    CardImg,
    Container,
    Row,
    Col
  } from "reactstrap";

const Problem = () => {
    return ( 
        <>
            <Container className="mt-5 ">
                <Row className=" align-items-center justify-content-md-between" >
                    <Col className="mb-5 mb-md-0 text-center " md="12">
                        <h1 className="lether">Problema</h1>
                    </Col>
                </Row>
                <Row className="mt-10">
                    <Col className="mb-5 mb-md-0 text-center " md="12">
                        <p>Los sistemas de aire acondicionado-calefacción fomentan la propagación de todo tipo de microorganismos, afectando directamente la salud de las personas y generando contagio de enfermedades, alergias y malos olores.</p>
                        <p>LUna solución limpia, sin químicos y sustentable para el tratamiento de olores y contaminantes gaseosos de la industria, principalmente en los rubros químico/minero, industria pesquera, tratamiento de aguas (gases) e industria ganadera.</p>
                    </Col>
                </Row>
                <Row className="mt-10">
                    <Col className="mb-5 mb-md-0 text-center " md="12">
                        <CardImg
                            alt="..."
                            src={require("assets/images/carddescarm.png")}
                            />
                    </Col>
                </Row>
            </Container>
        </>
     );
}
 
export default Problem;