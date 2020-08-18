import React, { useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';

import { ContactoContext } from '../../contexts/ContactoContext';
import {
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Form
  } from "reactstrap";

const Pide_contacto = () => {
    const { datosFormulario, guardarConsulta } = useContext(ContactoContext);

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
    

    
    const validarUsuario = () => {
        if( usuario.nombre != '' && usuario.email != '' && usuario.telefono != '' && usuario.observacion != ''){
            const user = {
                name : usuario.nombre,
                mail : usuario.email,
                phone : usuario.telefono,
                obser : usuario.observacion
            }
            datosFormulario(user);
            setShow(false);
            guardarConsulta(true);
            usuario.nombre = ''; 
            usuario.email = ''; 
            usuario.telefono = ''; 
            usuario.observacion = '';
        } else {
            return
        }
   }
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
                <Form >
                    { }
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
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={validarUsuario}>
                    Enviar
                </Button>
            </Modal.Footer>
        </Modal>
        </>
     );
}
 
export default Pide_contacto;