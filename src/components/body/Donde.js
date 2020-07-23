// @flow

import React, { useState } from 'react';
import Pide from './Pide';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import axios from 'axios';
import {
  Row,
  Col,
  Container,
  Label,
  Input,
  Button
} from "reactstrap";

const Donde = () => {

  const [ cliente, guardarClientes ] = useState([]);
  
    const obtenerClientes = async () => {
      const url = 'https://www.descalante.com/api/espana/marca/TOYOTA';

      const clie = await axios.get(url);
      console.log(clie.data);
      guardarClientes(clie.data); 
    }

    //obtenerClientes();

  return ( 
    <>
      <Container>
        <Row className="my-5">
          <Pide />
        </Row>
        <Row className="my-5">
            <Col className="mb-5 mb-md-0 text-center " md="12">
                <h1 className="lether">¿Donde purificar mi automovil?</h1>
            </Col>
        </Row>
        <Row className="my-5">
          <Col className="text-center" md="12">
            <Map center={[40.4165, -3.70256]} zoom={9}> 
              <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
            </Map>
          </Col>
        </Row>
        <Row className="">
          <Col className="text-center" md="3">
                <Input type="select" name="select" id="tipo">
                  <option>Seleccione Ciudad.!</option>
                  <option>Concesionario</option>
                </Input>
          </Col>
          <Col className="text-center" md="3">
                <Input type="select" name="select" id="tipo">
                  <option>Seleccione Poblacion.!</option>
                  <option>Concesionario</option>
                </Input>
          </Col>
          <Col className="text-center" md="3">
                <Input type="select" name="select" id="tipo">
                  <option>Seleccione Marca.!</option>
                  <option>Concesionario</option>
                </Input>
          </Col>
          <Col className="text-center" md="3">
                <Button 
                  variant="primary" 
                  color="twitter"
                  type="input" 
                  name="buscar" 
                  id="buscar" 
                  block
                  >
                    Buscar
                </Button>
          </Col>
        </Row>
      </Container>
    </>
    )
}

export default Donde;
