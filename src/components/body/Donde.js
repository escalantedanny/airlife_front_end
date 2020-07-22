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
  Input
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
          <Col className="text-center" md="10">
            <Map center={[40.4165, -3.70256]} zoom={9}> 
              <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
            </Map>
              <Label for="tipo" sm={2}>Tipo</Label>
                <Input type="select" name="select" id="tipo">
                  <option>Seleccione..!</option>
                  <option>Concesionario</option>
                </Input>
          </Col>
        </Row>
      </Container>
    </>
    )
}

export default Donde;
