import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import {
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Form
  } from "reactstrap";

const Pide_contacto = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return ( 
        <>
                <Row className="text-center mt-5 mb-5">
                    <Col className="text-center d-none d-sm-none d-md-block">
                        <img 
                            onClick={handleShow}
                            className="img-fluid"
                            width="auto" 
                            height="95"
                            className="card-lift--hover" 
                            alt="Certificaciones de la compañia" 
                            src={require("assets/images/pide_contacto.png")} />
                    </Col>
                </Row>

                <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Contacto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="formContacto">
                    <Col>
                        <FormGroup row>
                            <Label for="name" sm={3}>Nombre</Label>
                            <Col sm={9}>
                                <Input type="text" id="name" placeholder="Enter Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={3}>Email</Label>
                                <Col sm={9}>
                                    <Input type="email" id="email" name="email" placeholder="Enter Email" />
                                </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="phone" sm={3}>Tel&eacute;fono</Label>
                            <Col sm={9}>
                                <Input type="text" id="phone" placeholder="Telefono de contacto" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="comentario" sm={3}>Comentario</Label>
                            <Col sm={9}>
                                <Input type="textarea" id="comentario" placeholder="Telefono de contacto" />
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Enviar
            </Button>
            </Modal.Footer>
        </Modal>
        </>
     );
}
 
export default Pide_contacto;