import React, { useState, useContext } from 'react';
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

  const { buscarDirecciones, guardarConsulta, direcciones } = useContext(DireccionesContext);

  const [ error, guardarError ] = useState(false);

    const obtenerDatos = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const submitDirecciones = e => {
      e.preventDefault();
      if(busqueda.ciudad === '' || busqueda.marca === ''){
          guardarError(true);
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
                <h1 className="lether">¿Donde purificar mi automovil?</h1>
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
                    <option value="">Seleccione Marca.!</option>
                    <option value="BOSCH">BOSCH</option>
                    <option value="CARSHARING">CARSHARING</option>
                    <option value="FIAT">FIAT</option>
                    <option value="KIA">KIA</option>
                    <option value="LEXUS">LEXUS</option>
                    <option value="LR JAGUAR">LR JAGUAR</option>
                    <option value="MAZDA">MAZDA</option>
                    <option value="MERCEDES">MERCEDES</option>
                    <option value="MITSUBISHI">MITSUBISHI</option>
                    <option value="MULTImarca">MULTImarca</option>
                    <option value="SUBARU">SUBARU</option>
                    <option value="TOYOTA">TOYOTA</option>
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
                    <option value="">Seleccione Ciudad.!</option>
                    <option value="Alava">Alava</option>
                    <option value="Albacete">Albacete</option>
                    <option value="Alicante">Alicante</option>
                    <option value="Almeria">Almeria</option>
                    <option value="Aragón">Arag&oacute;n</option>
                    <option value="Asturias">Asturias</option>
                    <option value="Ávila">&Aacute;vila</option>
                    <option value="Badajoz">Badajoz</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Burgos">Burgos</option>
                    <option value="Cáceres">C&aacute;ceres</option>
                    <option value="Cádiz">C&aacute;diz</option>
                    <option value="Ciudad Real">Ciudad Real</option>
                    <option value="Córdoba">C&oacute;rdoba</option>
                    <option value="Coruña">Coru&ntilde;a</option>
                    <option value="Gerona">Gerona</option>
                    <option value="Girona">Girona</option>
                    <option value="Gran">Gran Canaria</option>
                    <option value="Guadalajara">Guadalajara</option>
                    <option value="Huelva">Huelva</option>
                    <option value="Islas Baleares">Islas Baleares</option>
                    <option value="La coruña">La Coru&ntilde;a</option>
                    <option value="Las Palmas">Las Palmas</option>
                    <option value="León">Le&oacute;n</option>
                    <option value="Lisboa">Lisboa</option>
                    <option value="Lugo">Lugo</option>
                    <option value="Madrid">Madrid</option>
                    <option value="Málaga">M&aacute;laga</option>
                    <option value="Mallorca">Mallorca</option>
                    <option value="Murcia">Murcia</option>
                    <option value="Navarra">Navarra</option>
                    <option value="Orense">Orense</option>
                    <option value="Pontevedra">Pontevedra</option>
                    <option value="La Rioja">La Rioja</option>
                    <option value="S.C. Tenerife">S.C. Tenerife</option>
                    <option value="Santander">Santander</option>
                    <option value="Segovia">Segovia</option>
                    <option value="Sevilla">Sevilla</option>
                    <option value="Tarragona">Tarragona</option>
                    <option value="Toledo">Toledo</option>
                    <option value="Valencia">Valencia</option>
                    <option value="Valladolid">Valladolid</option>
                    <option value="Vizcaya">Vizcaya</option>
                    <option value="Zaragoza">Zaragoza</option>
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
            <Col>
              { error ? <Error mensaje="Debe ingresar Marca y Ciudad"/> : null }
            </Col>
          </Row>
        </form>
      </Container>
    </>
    )
}

export default Donde;
