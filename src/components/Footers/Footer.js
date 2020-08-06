import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer-color">
          <Container>
            <Row className="row-grid align-items-center mb-3">
              <Col sm="6"> 
              <br />
                <h4 className="lether-footer mb-2">
                  Airlife España
                </h4>
                <p className="lether-footer mb-0">
                  spain@airlife.com<br />
                </p>
                <p className="lether-footer mb-0">
                  +34 91 325 6703 <br />
                  +43 91 325 6705 
                </p>
                <span className="lether-footer mb-0">
                  Calle Estrasburgo 7, 28232 Madrid.
                </span>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com/Airlife-Espa%C3%B1a-123209301679036/"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="instagram"
                  href="https://www.instagram.com/airlife_internacional/v"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1 btn-linkedin"
                  color="facebook"
                  href="https://www.linkedin.com/company/airlife-chile-s.a."
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon btn-linkedin">
                    <i className="fa fa-linkedin" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Follow us
                </UncontrolledTooltip>
              </Col>
            </Row>
            <Row>
              <Col md="12" className="text-left mb-2">
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
