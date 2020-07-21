import React from 'react';
import {
    Row,
    Col
  } from "reactstrap";

const CarText = () => {
    return ( 
        <>
            <Row >
                <Col md="5" className="text-right">
                    <img
                    className="img-fluid"
                    width="600" 
                    height="200"
                    align="center"
                    alt="Certificaciones de la compañia" src={require("assets/images/auto_tapaboca.png")} 
                    />
                </Col>
                <Col className="mb-1 mb-md-0 text-center" md="4">
                    <p>En Airlife nos preocupamos de la calidad del aire que respiras tú, tus hijos y las personas que más quieres día a día en tu automóvil. El aire puro es lo nuestro, por eso nuestra tecnología es completamente inofensiva para la salud de las personas y el medio ambiente.</p>
                    <p>Tu automóvil, al ser un lugar donde pasar mucho tiempo, se transforma también en un gran foco de infecciones.</p>
                    <p>Airlife permite sanitizar el interior del automóvil, destruyendo molecularmente hasta un 99,9% de olores, hongos, virus y bacterias, sin elementos químicos y utilizando el oxígeno como elemento básico dejando el aire limpio y puro.</p>
                </Col>
                <Col md="2" className="text-right">
                <img
                    className="img-fluid float-md-center"
                    width="180" 
                    height="80"
                    align="center"
                    alt="Certificaciones de la compañia" src={require("assets/images/sello_airlife.png")} 
                    />
                
                </Col>
            </Row>
        </>
     );
}
 
export default CarText;