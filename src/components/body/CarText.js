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
                    width="650" 
                    height="200"
                    align="center"
                    alt="Certificaciones de la compañia" src={require("assets/images/auto_tapaboca.png")} 
                    />
                </Col>
                <Col className="mb-1 mb-md-0 text-center" md="5">
                    <br />
                    <br />
                    <p>En Airlife por más de 25 años y en más de 10 países, nos preocupamos de la calidad del aire que día a día respiran en tu automóvil tú, tus hijos y las personas que más quieres. El aire puro es lo nuestro, por eso nuestra tecnología es completamente inofensiva para la salud de las personas y el medio ambiente.</p>
                    <p>Tu coche, al ser un lugar donde solemos pasar mucho tiempo, se transforma también en un gran foco de infecciones.</p>
                    <p>Airlife permite higienizar el interior del automóvil, destruyendo molecularmente hasta un 99,99% de olores, hongos, virus y bacterias, sin elementos químicos y utilizando el oxígeno como elemento básico dejando el aire limpio y puro.</p>
                </Col>
                <Col md="2" className="text-center">
                <img
                    className="img-fluid float-md-center"
                    width="200" 
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