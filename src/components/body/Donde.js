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
                    <option value="MULTIMARCA">MULTIMARCA</option>
                    <option value="LR JAGUAR">LR JAGUAR</option>
                    <option value="TOYOTA">TOYOTA</option>
                    <option value="MERCEDES">MERCEDES</option>
                    <option value="BERGÉ">BERGÉ</option>
                    <option value="BOSCH">BOSCH</option>
                    <option value="LEXUS">LEXUS</option>
                    <option value="FIAT">FIAT</option>
                    <option value="SUBARU">SUBARU</option>
                    <option value="KIA">KIA</option>
                    <option value="MITSUBISHI">MITSUBISHI</option>
                    <option value="MAZDA">MAZDA</option>
                    <option value="CARSHARING">CARSHARING</option>
                    <option value="MULTIMARCA - Semat">MULTIMARCA - Semat</option>
                    <option value="MULTIMARCA - Electro Auto">MULTIMARCA - Electro Auto</option>
                    <option value="MULTIMARCA - Elma">MULTIMARCA - Elma</option>
                    <option value="MULTIMARCA - Luxurywash4">MULTIMARCA - Luxurywash4</option>
                    <option value="MULTIMARCA - Carnext">MULTIMARCA - Carnext</option>
                    <option value="MULTIMARCA - Cars y Cars">MULTIMARCA - Cars y Cars</option>
                    <option value="MULTIMARCA - Feraicomotor">MULTIMARCA - Feraicomotor</option>
                    <option value="MULTIMARCA - Fiststop">MULTIMARCA - Fiststop</option>
                    <option value="MULTIMARCA - Midas">MULTIMARCA - Midas</option>
                    <option value="MULTIMARCA - Burbucar">MULTIMARCA - Burbucar</option>
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
                          <option value={pueblo}>{pueblo}</option>
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
