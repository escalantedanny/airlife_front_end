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
      marca : '',
      poblacion : ''
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
      if(busqueda.ciudad === '' || busqueda.marca === '' || busqueda.poblacion === ''){
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
            <Col className="text-center" md="3">
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
            <Col className="text-center" md="3">
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
                    <option value="Cibrao">Cibrao</option>
                    <option value="Ciempozuelos">Ciempozuelos</option>
                    <option value="Collado Villalba">Collado Villalba</option>
                    <option value="Colmenar Viejo">Colmenar Viejo</option>
                    <option value="Córdoba">C&oacute;rdoba</option>
                    <option value="Coslada">Coslada</option>
                    <option value="El Plantío">El Plantío</option>
                    <option value="El Prat de Llobregat">El Prat de Llobregat</option>
                    <option value="Elche">Elche</option>
                    <option value="Fuenlabrada">Fuenlabrada</option>
                    <option value="Gallarta">Gallarta</option>
                    <option value="Gavá">Gav&aacute;</option>
                    <option value="Getafe">Getafe</option>
                    <option value="Getxo">Getxo</option>
                    <option value="Gijón">Gij&oacute;n</option>
                    <option value="Gines">Gines</option>
                    <option value="Girona">Girona</option>
                    <option value="Gran Canaria">Gran Canaria</option>
                    <option value="Granollers">Granollers</option>
                    <option value="Guadalajara">Guadalajara</option>
                    <option value="Herencia">Herencia</option>
                    <option value="Hospitalet de Llobregat">Hospitalet de Llobregat</option>
                    <option value="IBAIZABAL">Ibaizabal</option>
                    <option value="Ibiza">Ibiza</option>
                    <option value="La Coruña">La Coru&ntilde;a</option>
                    <option value="La Llagosta">La Llagosta</option>
                    <option value="La Puebla de Montalbán">La Puebla de Montalb&aacute;n</option>
                    <option value="La Roda de Andalucía">La Roda de Andalucía</option>
                    <option value="Las Palmas">Las Palmas</option>
                    <option value="Las Palmas Gran Canaria">Las Palmas Gran Canaria</option>
                    <option value="Las Rozas">Las Rozas</option>
                    <option value="Leganés">Legan&eacute;s</option>
                    <option value="León">Le&0acute;n</option>
                    <option value="Lisboa">Lisboa</option>
                    <option value="Logroño">Logro&ntilde;o</option>
                    <option value="Lugo">Lugo</option>
                    <option value="Madrid">Madrid</option>
                    <option value="Majadahonda">Majadahonda</option>
                    <option value="Málaga">M&aacute;laga</option>
                    <option value="Mallorca">Mallorca</option>
                    <option value="Manacor">Manacor</option>
                    <option value="Milladoiro - Balcaide">Milladoiro - Balcaide</option>
                    <option value="Móstoles">M&oacute;stoles</option>
                    <option value="Murcia">Murcia</option>
                    <option value="Olías del Rey">Ol&iacute;as del Rey</option>
                    <option value="Olot">Olot</option>
                    <option value="Orense">Orense</option>
                    <option value="Oviedo">Oviedo</option>
                    <option value="Palma de Mallorca">Palma de Mallorca</option>
                    <option value="Pamplona">Pamplona</option>
                    <option value="Parla">Parla</option>
                    <option value="Pinto">Pinto</option>
                    <option value="Plasencia">Plasencia</option>
                    <option value="Ponferrada">Ponferrada</option>
                    <option value="Pozuelo de Alarcón">Pozuelo de Alarc&oacute;n</option>
                    <option value="QUART DE POBLET">Quart De Poblet</option>
                    <option value="Reus">Reus</option>
                    <option value="Rivas - Vaciamadrid">Rivas - Vaciamadrid</option>
                    <option value="Ronda">Ronda</option>
                    <option value="S.S. DE LOS REYES">S.S. DE LOS REYES</option>
                    <option value="San Cristóbal de La Laguna">San Crist&oacute;bal de La Laguna</option>
                    <option value="San Feliú de Llobregat">San Feli&uacute; de Llobregat</option>
                    <option value="San Fernando de Henares">San Fernando de Henares</option>
                    <option value="San Pedro de Alcántara">San Pedro de Alc&aacute;ntara</option>
                    <option value="San Sebastián de los Reyes">San Sebasti&aacute;n de los Reyes</option>
                    <option value="Sant Adriá de Besos">Sant Adri&aacute; de Besos</option>
                    <option value="Sant Cugat">Sant Cugat</option>
                    <option value="Sant Joan Despi">Sant Joan Despi</option>
                    <option value="Santa Cruz de Tenerife">Santa Cruz de Tenerife</option>
                    <option value="Santander">Santander</option>
                    <option value="Santiago de Compostela">Santiago de Compostela</option>
                    <option value="Segovia">Segovia</option>
                    <option value="Sestao">Sestao</option>
                    <option value="Sevilla">Sevilla</option>
                    <option value="Silla">Silla</option>
                    <option value="Talavera de la Reina">Talavera de la Reina</option>
                    <option value="Telde">Telde</option>
                    <option value="Topacio">Topacio</option>
                    <option value="Torrejón de Ardoz">Torrej&oacute;n de Ardoz</option>
                    <option value="Torrevieja">Torrevieja</option>
                    <option value="Tres Cantos">Tres Cantos</option>
                    <option value="Valdemoro">Valdemoro</option>
                    <option value="Valencia">Valencia</option>
                    <option value="Valladolid">Valladolid</option>
                    <option value="Vigo">Vigo</option>
                    <option value="Vilafranca del Penedés">Vilafranca del Pened&eacute;s</option>
                    <option value="Villanueva de la Serena">Villanueva de la Serena</option>
                    <option value="Villaviciosa de Odón">Villaviciosa de Od&oacute;n</option>
                    <option value="Vitoria">Vitoria</option>
                    <option value="Vizcaya">Vizcaya</option>
                    <option value="Zaragoza">Zaragoza</option>
                  </Input>
            </Col>
            <Col className="text-center" md="3">
                  <Input 
                    type="select" 
                    className="form-control"
                    name="poblacion" 
                    id="poblacion"
                    onChange={obtenerDatos}
                  >
                    <option value="">Seleccione Poblaci&oacute;n.!</option>
                    <option value="Adeje. Los Olivos">Adeje Los Olivos</option>
                    <option value="Albacete">Albacete</option>
                    <option value="Alcalá de Henares">Alcal&aacute; de Henares</option>
                    <option value="Alcobendas">Alcobendas</option>
                    <option value="Alcorcón">Alcorc&oacute;n</option>
                    <option value="Alcoy">Alcoy</option>
                    <option value="Algeciras">Algeciras</option>
                    <option value="Algete">Algete</option>
                    <option value="Alicante">Alicante</option>
                    <option value="Almería">Almer&iacute;a</option>
                    <option value="Aranjuez">Aranjuez</option>
                    <option value="Arganda del Rey">Arganda del Rey</option>
                    <option value="Ávila">&Aacute;vila</option>
                    <option value="Badalona">Badalona</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Bilbao">Bilbao</option>
                    <option value="Blanes">Blanes</option>
                    <option value="Boadilla del Monte">Boadilla del Monte</option>
                    <option value="Burgos">Burgos</option>
                    <option value="Carballo">Carballo</option>

                    <option value="Cartagena">Cartagena</option>
                    <option value="Cibrao">La Coru&ntilde;a</option>
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
