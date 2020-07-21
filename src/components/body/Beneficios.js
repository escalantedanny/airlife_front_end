import React from 'react';
import {
    CardImg,
    Container,
    Row,
    Col,
    Card
  } from "reactstrap";

const Beneficios = () => {
    return ( 
        <>
            <Container className="my-5">
                <Row className="mt-10 mb-5">
                    <Col className="mb-5 mb-md-0 text-center " md="12">
                        <h1 className="lether">Beneficios</h1>
                    </Col>
                </Row>
                <Row className="mt-10">
                    <Col className="mb-5 mb-md-0" md="3">
                        <Card className="card-lift--hover border-0">
                                <CardImg
                                alt="..."
                                src={require("assets/images/Beneficios/beneficio1.png")}
                                />
                        </Card>
                    </Col>
                    <Col className="mb-5 mb-md-0" md="3">
                        <Card className="card-lift--hover border-0">
                                <CardImg
                                alt="..."
                                src={require("assets/images/Beneficios/beneficio2.png")}
                                />
                        </Card>
                    </Col>
                    <Col className="mb-5 mb-md-0" md="3">
                        <Card className="card-lift--hover border-0">
                                <CardImg
                                alt="..."
                                src={require("assets/images/Beneficios/beneficio3.png")}
                                />
                        </Card>
                    </Col>
                    <Col className="mb-5 mb-md-0" md="3">
                        <Card className="card-lift--hover border-0">
                                <CardImg
                                alt="..."
                                src={require("assets/images/Beneficios/beneficio4.png")}
                                />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
     );
}
 
export default Beneficios;