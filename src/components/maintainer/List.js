import React, { useContext } from 'react';
import Listado from '../maintainer/Listado';
import { Jumbotron, Container, Table, Row, Col } from 'react-bootstrap';
import { ListAddressContext } from '../../contexts/ListAddressContext';

const List = () => {

    const { listas } = useContext(ListAddressContext);

    return ( 
        <>
            <Container>
                <Row>
                    <Col>
                        <Jumbotron variant="success">
                        <h1 className="text-align.center">Listado Clientes con Pocisi&oacute;n Geogr&aacute;fica!</h1>
                        </Jumbotron>
                        <Table  
                            striped hover
                            >
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Marca</th>
                                    <th>direcci&oacute;n</th>
                                    <th>Ciudad</th>
                                    <th>Poblaci&oacute;n</th>
                                    <th>Latitud</th>
                                    <th>Longitud</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listas.map( cli => (
                                        <Listado 
                                            key={cli.id}
                                            cli={cli}
                                        />
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default List;