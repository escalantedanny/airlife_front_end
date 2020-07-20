import React from 'react';
import {
    CardImg,
    Container,
    Row,
    Col
  } from "reactstrap";
  import { Image } from 'react-bootstrap';

const CarText = () => {
    return ( 
        <Container>
            <Row>
                <Col className="mb-1 mb-md-0" md="6">
                    <Image className="card-lift--hover" alt="Certificaciones de la compañia" src={require("assets/images/cartapaboca.png")} />
                </Col>
                <Col className="mb-1 mb-md-0 text-center text-md-justify" md="6">
                    <p>Dicha tecnología es la que aplicamos día a día en más de 13 países, con más de 20.000 soluciones instaladas, para entregar aire limpio, libre de olores, bacterias, hongos y virus en recintos públicos climatizados, en transportes de pasajeros, edificios de oficinas, restaurantes, centro comerciales, recintos de salud y automóviles particulares, entre otras aplicaciones.</p>
                    <p>Bienvenido al Aire Puro que mereces. Bienvenido a Airlife.</p>
                    <p>Los sistemas de aire acondicionado-calefacción fomentan la propagación de todo tipo de microorganismos, afectando directamente la salud de las personas y generando contagio de enfermedades, alergias y malos olores, la tecnología Airlife purifica y restablece las propiedades naturales del aire al interior en recintos cerrados climatizados, en forma continua, limpia, segura, ecológica y con un bajo costo energético.</p>
                </Col>
            </Row>

        </Container>
     );
}
 
export default CarText;