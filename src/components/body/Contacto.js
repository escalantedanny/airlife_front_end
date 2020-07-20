import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import {
    Container,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Form
  } from "reactstrap";

const Contacto = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
    <>
        <Container className="my-5">
            <Row className="mt-10">
                <Col  className="mb-5 mb-md-0 text-center " md="12">
                    <Button className="lether" onClick={handleShow}>
                        ¡Contactanos!
                    </Button>
                </Col>
            </Row>
        </Container>

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
 
export default Contacto;