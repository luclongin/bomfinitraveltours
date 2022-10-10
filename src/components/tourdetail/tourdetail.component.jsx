import React from "react";
import Navigation from "../navigation/navigation.components";
import { Helmet } from "react-helmet";
import './tourdetail.styles.scss';
import tour1dia from '../../images/tour1dia.jpeg';
import { Container, Row , Col} from "react-bootstrap";
import tour1diaContent from "../../tours";
import Footer from "../footer/footer.component";
import ControlledCarousel from "../carousel/carousel.components";
import WhatsappIcon from "../whatsappIcon/whatsappIcon.component";

const TourDetail = ({tourname}) => {
      return (
            <main>
                  <Helmet>
                        <title>{tourname} | Bomfini Travel Tours</title>
                        <link rel="preconnect" href="https://fonts.googleapis.com"/>
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Raleway:wght@400;500&display=swap" rel="stylesheet"/> 
                        <script src="https://kit.fontawesome.com/aa0fe87a05.js" crossorigin="anonymous"></script>
                  </Helmet>
                  <Navigation tourname="Tour de 1 día" textColor="black"/>
                  <WhatsappIcon />
                  <Container fluid className="tourdetail-cover-container">
                        <Row className="tourdetail-title justify-content-md-center">
                              <Col className="tourdetail-title-col" xs md="4" lg="5">
                                    <h1 className="text-center">Tour de 1 día</h1>
                                    <p className="text-center">Bomfini Travel Tours</p>
                              </Col>
                        </Row>
                        <Row className="tourdetail-cover">
                              <Col xs md="8" lg="6" className="d-flex tourcarousel-container">
                                    <ControlledCarousel />
                              </Col>
                        </Row>
                  </Container>
                  <Container className="tourdetail-content-container">
                        <Row className="tourdetail-content-container-row-programme tourdetail-content-container-row justify-content-md-center">  
                              <Col className="d-flex justify-content-center">
                                    <ol>
                                    <h2 className="programadeldia">Programa del día</h2>
                                          {tour1diaContent.programme.map((content) => {
                                                return(
                                                <li>
                                                      {content}            
                                                </li>
                                                );
                                          }
                                          )}
                                    </ol>
                              </Col>
                        </Row>
                        <Row className="tourdetail-content-container-row">
                              <Col>
                              <h2>Lo que ofrecemos</h2>
                                    <ul className="tourdetail-content-included">
                                          <li className="noliststyle">
                                                <span className="bold">Hora de salida:</span> {tour1diaContent.horarios.salida}
                                          </li>
                                          <li className="noliststyle">
                                                <span className="bold">Hora de regreso:</span> {tour1diaContent.horarios.regreso}
                                          </li>
                                          {
                                                tour1diaContent.included.map((content) => {
                                                      return(
                                                            <li>{content}</li>
                                                      );
                                                })
                                          }
                                    </ul>
                              </Col>
                              <Col>
                                          <h2>Lo que no incluye</h2>
                                          <ul>
                                          {
                                                tour1diaContent.not_included.map((content) => {
                                                      return(
                                                            <li>{content}</li>
                                                      );
                                                })
                                          }
                                          </ul>
                              </Col>
                        </Row>
                  </Container>
                  <Footer />
            </main>
      );
}

export default TourDetail;