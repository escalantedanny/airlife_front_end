import React, { useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';

import { ContactoContext } from '../../contexts/ContactoContext';

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

    const { datosFormulario } = useContext(ContactoContext);

    const [usuario, guardarUsuario] = useState({
        nombre : '',
        email: '',
        telefono: '',
        observacion: ''
    });

    const { nombre, email, telefono, observacion } = usuario;

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const verificar = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }
    

    if( usuario.nombre != '' && usuario.email != '' && usuario.telefono != '' && usuario.observacion != '' && show == false){
        const user = {
            name : usuario.nombre,
            mail : usuario.email,
            phone : usuario.telefono,
            obser : usuario.observacion
        }
        //datosFormulario(user);
        validarUsuarioF(user);
    }

    function validarUsuarioF(user){
        datosFormulario(user);
    }

    const validarUsuario = () => {
        console.log('oo');
   }

    return ( 
    <>
        <Container className="my-5 mt-5">
            <Row className="mt-10">
            <Col  className="text-center " md="4"></Col>
                <Col  className="text-center " md="4">
                    <img 
                        onClick={handleShow}
                        className="img-fluid"
                        width="auto" 
                        height="100"
                        className="card-lift--hover" 
                        alt="Certificaciones de la compañia" 
                        src={require("assets/images/contactanos.png")} />
                </Col>
                <Col  className="text-center " md="4"></Col>
            </Row>
        </Container>

        <Modal show={show} >
            <Form 
                onSubmit={validarUsuario}
            >
                <Modal.Header>
                    <Modal.Title>Contacto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Col>
                            <FormGroup row>
                                <Label for="name" sm={3}>Nombre</Label>
                                <Col sm={9}>
                                    <Input 
                                        type="text" 
                                        id="nombre" 
                                        name="nombre"
                                        value={nombre}
                                        onChange={verificar}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" sm={3}>Email</Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="email" 
                                            id="email" 
                                            name="email"
                                            value={email}
                                            onChange={verificar}
                                        />
                                    </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="phone" sm={3}>Tel&eacute;fono</Label>
                                <Col sm={9}>
                                    <Input 
                                        type="text" 
                                        id="telefono" 
                                        name="telefono"
                                        value={telefono}
                                        onChange={verificar}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="comentario" sm={3}>Comentario</Label>
                                <Col sm={9}>
                                    <Input 
                                        type="textarea" 
                                        id="observacion" 
                                        name="observacion"
                                        onChange={verificar}
                                        value={observacion}
                                    />
                                </Col>
                            </FormGroup>
                        </Col>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    </>
     );
}
 
export default Contacto;