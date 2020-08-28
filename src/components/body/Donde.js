import React, { useState, useContext, useEffect } from 'react';
import Pide from './Pide';
import Error from '../mensajes/Error';
import {
  Row,
  Col,
  Container,
  Input,
  Button
} from "reactstrap";
import Mapa from './Mapa';

import { DireccionesContext } from '../../contexts/DireccionesContext';

const Donde = () => {

  const [ busqueda, guardarBusqueda ] = useState({
      ciudad : '',
      marca : ''
  })

  const [ poblacion, buscarPoblacion ] = useState({
    marca : ''
})


useEffect( () => {
      const buscarPoblaciones = () => {
        buscarPobla(poblacion)
      }
      buscarPoblaciones();
  

}, [poblacion]);

  const { buscarDirecciones, guardarConsulta, buscarPobla, direcciones, poblaciones } = useContext(DireccionesContext);

  const [ error, guardarError ] = useState(false);

  const newArr = []
  const myObj = {}
  if(poblaciones){

    let arreglo = [];
    poblaciones.map( pueblo => (
        arreglo.push(pueblo.ciudad)
    ))

    arreglo.forEach(el => {
      if (!(el in myObj)) {
        myObj[el] = true
        newArr.push(el)
      }
    })
  }

    const obtenerDatos = e => {

        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
        buscarPoblacion({
            ...poblacion,
            [e.target.name] : e.target.value
        });
    }

    const submitDirecciones = e => {
      e.preventDefault();
      if( busqueda.ciudad === '' || busqueda.marca === ''){
        guardarError(true);
          setTimeout(() => {
            guardarError(false);
          }, 3000);
          return;
      }
      guardarError(false);
      buscarDirecciones(busqueda);
      guardarConsulta(true);
    }

  return ( 
    <>
      <Container>
        <Row className="my-5">
          <Pide />
        </Row>
        <Row className="my-5">
            <Col className="mb-5 mb-md-0 text-center " md="12">
                <h1 className="lether">¿Donde higienizar mi coche?</h1>
            </Col>
        </Row>
        <Row className="my-5">
          <Col className="text-center" md="12">
            <Mapa 
              direcciones={direcciones}
            />
          </Col>
        </Row>
        <form 
            className="col-12"
            onSubmit={ submitDirecciones }
        >
          <Row className="">
            <Col className="text-center" md="4">
                  <Input 
                    type="select" 
                    className="form-control"
                    name="marca" 
                    id="marca"
                    onChange={obtenerDatos}  
                  >
                    
                    <option value="">Seleccione Marca</option>
                    <option value="1">BERGÉ</option>
                    <option value="2">BOSCH</option>
                    <option value="3">CARSHARING</option>
                    <option value="4">FIAT</option>
                    <option value="5">KIA</option>
                    <option value="6">LEXUS</option>
                    <option value="7">LR JAGUAR</option>
                    <option value="8">MAZDA</option>
                    <option value="9">MERCEDES</option>
                    <option value="10">MITSUBISHI</option>
                    <option value="11">MULTIMARCA - Burbucar</option>
                    <option value="12">MULTIMARCA - Carnext</option>
                    <option value="13">MULTIMARCA - Cars y Cars</option>
                    <option value="14">MULTIMARCA - Dafer</option>
                    <option value="15">MULTIMARCA - Electro Auto</option>
                    <option value="16">MULTIMARCA - Elma</option>
                    <option value="17">MULTIMARCA - Feraicomotor</option>
                    <option value="18">MULTIMARCA - Fiststop</option>
                    <option value="19">MULTIMARCA - Gorocar</option>
                    <option value="20">MULTIMARCA - Groupecat</option>
                    <option value="21">MULTIMARCA - Luxurywash4</option>
                    <option value="22">MULTIMARCA - Midas</option>
                    <option value="23">MULTIMARCA - MMG</option>
                    <option value="24">MULTIMARCA - Paco Jr</option>
                    <option value="25">MULTIMARCA - Roauto</option>
                    <option value="26">MULTIMARCA - Semat</option>
                    <option value="27">MULTIMARCA - Tecnove</option>
                    <option value="28">MULTIMARCA - Tradisa</option>
                    <option value="29">MULTIMARCA - Univex</option>
                    <option value="30">SUBARU</option>
                    <option value="31">TOYOTA</option>
                  </Input>
            </Col>
            <Col className="text-center" md="4">
                  <Input 
                    type="select" 
                    className="form-control"
                    name="ciudad" 
                    id="ciudad"
                    onChange={obtenerDatos}
                  >
                      <option value="">Seleccione Ciudad</option>
                    { poblaciones ?
                          newArr.map( pueblo => (
                          <option value={pueblo} key={pueblo}>{pueblo}</option>
                      ))
                      :
                      <option value="">Seleccione Ciudad</option>
                    }
                  </Input>
            </Col>
            <Col className="text-center" md="4">
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
          <Row className="mt-3 mb-5">
            <Col className="text-center">
              { error ? <Error mensaje="Debe ingresar Marca y Ciudad"/> : null }
            </Col>
          </Row>
        </form>
      </Container>
    </>
    )
}

export default Donde;
