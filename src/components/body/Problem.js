import React from 'react';
import {
    Container,
    Row,
    Col
  } from "reactstrap";

const Problem = () => {
    return ( 
        <>
            <Container className="mt-5 mb-md-0 ">
                <Row className="align-items-center justify-content-md-between" >
                    <Col className="mb-5 mb-md-0 text-center " md="12">
                        <h1 className="lether">Problema</h1>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="mb-5 mb-md-0 text-center " md="12">
                        <p>En tu automóvil se acumula contaminación en el sistema de ventilación, generando gran cantidad de bacterias, hongos y virus  Además los olores desagradables al tabaco y comida se impregnan en los tapices de automóvil.</p>
                        <p>Con nuestra tecnología limpia y eficiente, destruimos los microorganismos y olores de origen orgánico, sin camuflarlos y reduciendo los gérmenes sin necesidad de químicos, volviéndola una tecnología inofensiva para la salud y el medio ambiente.</p>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col md="12" className="text-center">
                        <img
                            className="img-fluid"
                            width="1000" 
                            height="1000"
                            align="center"
                            alt="..."
                            src={require("assets/images/AUTO_familiar.png")}
                            />
                    </Col>
                </Row>
            </Container>
        </>
     );
}
 
export default Problem;