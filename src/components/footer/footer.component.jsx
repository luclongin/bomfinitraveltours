import React from "react";
import './footer.styles.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../images/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
      return(
            <Container fluid className="homepage-footer">
                  <Row className="homepage-footer-row justify-content-md-center">
                        <Col xs="auto" sm={6} md={6} lg={5} xl={5} xxl={5}>
                        <img src={Logo} alt="Bomfini Tours Logo" />
                        </Col>
                        <Col xs="auto" sm={6} md={6} lg={5} xl={5} xxl={5}>
                        <div className="homepage-footer-text">  
                              <p className="homepage-footer-contact contact-us">
                                    Haz tu reserva, contáctenos
                              </p>
                              <p className="homepage-footer-whatsapp">
                              <FontAwesomeIcon className="homepage-footer-whatsapp-icon" icon={faWhatsapp} />    
                              <span>+591 78 123 456</span>
                              </p>
                              <p className="homepage-footer-contact direccion">
                                    Dirección
                              </p>
                              <p className="homepage-footer-address">
                                    Bomfini Travel Tours
                                    <br />
                                    Av Ferroviaria & Av. Arce, Uyuni, Bolivia
                              </p>
                        </div>
                        </Col>
                  </Row>
            </Container>
      );
}

export default Footer;