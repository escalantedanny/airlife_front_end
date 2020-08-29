import React, { useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Error from '../mensajes/Error';

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

    const [usuario, guardarUsuario] = useState({
        nombre : '',
        email: '',
        telefono: '',
        observacion: ''
    });
    
    const { nombre, email, telefono, observacion } = usuario;
    
    const MySwal = withReactContent(Swal);
    const { datosFormulario, guardarConsulta, mensaje } = useContext(ContactoContext);
    const [show, setShow] = useState(false);
    const [ mensajeEmail, guardarEmail ] = useState(false);
    const [ mensajeWrongEmail, setEmail ] = useState(false);

    const handleShow = () => {
        usuario.nombre = ''; 
        usuario.email = ''; 
        usuario.telefono = ''; 
        usuario.observacion = '';
        guardarEmail(false);
        setEmail(false);
        setShow(true);
    }
    const handleClose = () => {
        usuario.nombre = ''; 
        usuario.email = ''; 
        usuario.telefono = ''; 
        usuario.observacion = '';
        guardarEmail(false);
        setEmail(false);
        setShow(false);
    }

    const verificar = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }
    
    const validarUsuario = e => {
        e.preventDefault();

        if( usuario.nombre.trim() === ''){
            guardarEmail(true);
            return
        }
        if( usuario.email.trim() === '' ){
            guardarEmail(true);
            return
        }     
        if( usuario.telefono.trim() === ''){
            guardarEmail(true);
            return
        }   
        if( usuario.observacion.trim() === ''){
            guardarEmail(true);
            return
        }  
        
        guardarEmail(false);
        let lastAtPos = usuario.email.lastIndexOf('@');
        let lastDotPos = usuario.email.lastIndexOf('.');
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && usuario.email.indexOf('@@') === -1 && lastDotPos > 2 && (usuario.email.length - lastDotPos) > 2)) {
            setEmail(true);
            return
        } 
        const user = {
            name : usuario.nombre,
            mail : usuario.email,
            phone : usuario.telefono,
            obser : usuario.observacion
        }
        datosFormulario(user);
        guardarConsulta(true);
        

        let timerInterval
        MySwal.fire({
        title: 'Enviado Información!',
        html: 'Cargando...',
        timer: 3000,
        timerProgressBar: true,
        onBeforeOpen: () => {
                MySwal.showLoading()
                timerInterval = setInterval(() => {
                const content = MySwal.getContent()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                    b.textContent = MySwal.getTimerLeft()
                    }
                }
            }, 100)
        },
        onClose: () => {
            clearInterval(timerInterval)
            
        }
        }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log(mensaje)
        }
        })
        setTimeout(() => {
                if(Object.entries(mensaje).length !== 0 ){
                    MySwal.fire({
                        title: <p>Enviado con Exito</p>,
                    footer: 'Copyright 2020',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    },
                    onOpen: () => {
                    MySwal.clickConfirm()
                    }
                }).then(() => {
                    return MySwal.fire('<p>'+mensaje+'</p>')
                });
            }
        }, 3000);
        usuario.nombre = ''; 
        usuario.email = ''; 
        usuario.telefono = ''; 
        usuario.observacion = '';
        setShow(false);
    }

    

    return ( 
        <>
        <Container className="my-5 mt-5">
            <Row className="mt-10">
            <Col  className="text-center " md="4"></Col>
                <Col  className="text-center " md="4">
                    <img 
                        onClick={handleShow}
                        className="img-fluid card-lift--hover"
                        width="auto" 
                        height="100"
                        alt="Certificaciones de la compañia" 
                        src={require("assets/images/contactanos.png")} />
                </Col>
                <Col  className="text-center " md="4"></Col>
            </Row>
        </Container>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Contacto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form 
                onSubmit={validarUsuario}
                >
                    { mensajeEmail ? <Error mensaje="Todos los campos son requeridos" /> : '' }
                    { mensajeWrongEmail ? <Error mensaje="El campo Email no es Valido" /> : '' }
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
                <Button variant="primary" type="button" onClick={validarUsuario}>
                    Enviar
                </Button>
            </Modal.Footer>
        </Modal>
    </>
     );
}
 
export default Contacto;