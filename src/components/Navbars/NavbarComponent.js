import React, { useState } from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

const NavbarComponent = () => {
  
  const componentDidMount = () => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  const collapseClasses = useState('');

  const onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  const onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={collapseClasses}
                onExiting={onExiting}
                onExited={onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                    >
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  
}

export default NavbarComponent;
