import React, { Fragment } from "react";
import Navigation from "../navigation/navigation.components";
import { Helmet } from "react-helmet";
import './tourdetail.styles.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';import Footer from "../footer/footer.component";
import ControlledCarousel from "../carousel/carousel.components";
import WhatsappIcon from "../whatsappIcon/whatsappIcon.component";

const TourDetail = ({specificTourContent, tourTitle}) => {

      const returnActivityByProgramme = (programme, dayNumber) => {
            if (typeof(programme) != "undefined" && programme != null) {
                  return (                        
                        <Col md={6} lg={6} className="programmeActivity-col">
                        {dayNumber == 0 ? <h3></h3> : <h3>Día {dayNumber}</h3>}
                              <ol className="tourdetail-content-container-ol">
                              {programme.map((activity) => {
                                    return(<li>{activity}</li>)
                              })}
                              </ol>
                        </Col>
                  );
            }
      }

      const displayTourProgramme = (tourContent) => {
            return(
                  <Fragment>
                        <Row className="programmeActivity-row">
                              <Fragment>
                                    {returnActivityByProgramme(tourContent.programme, 0)}
                              </Fragment>
                              </Row>
                        <Row className="justify-content-md-center programmeActivity-row">
                              <Fragment>
                                    {returnActivityByProgramme(tourContent.programme_firstday, 1)}
                              </Fragment>
                              <Fragment>
                                    {returnActivityByProgramme(tourContent.programme_secondday, 2)}
                              </Fragment>
                        </Row>
                        <Row className="programmeActivity-row">
                              <Fragment>
                                    {returnActivityByProgramme(tourContent.programme_thirdday, 3)}
                              </Fragment>
                        </Row>
                  </Fragment>
            );
      }


      return (
            <main>
                  <Helmet>
                        <title>{tourTitle} | Bomfini Travel Tours</title>
                        <link rel="preconnect" href="https://fonts.googleapis.com"/>
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Raleway:wght@400;500&display=swap" rel="stylesheet"/> 
                        <script src="https://kit.fontawesome.com/aa0fe87a05.js" crossorigin="anonymous"></script>
                  </Helmet>
                  <Navigation tourname={tourTitle} textColor="black" />
                  <WhatsappIcon />
                  <Container fluid className="tourdetail-cover-container">
                        <Row className="tourdetail-title justify-content-md-center">
                              <Col className="tourdetail-title-col" xs md="4" lg="5">
                                    <h1 className="text-center">{tourTitle}</h1>
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
                              <Col lg={10} className="d-flex">
                                    <ol className="tourdetail-content-container-ol">
                                    <h2 className="programadeldia">Programa{typeof(specificTourContent.programme) != "undefined" ? " del día" : "" }<span className="programaasterisk">*</span></h2>
                                          {         
                                                displayTourProgramme(specificTourContent)
                                          }
                                    </ol>
                              </Col>
                              {typeof(specificTourContent.programme) == "undefined" ? <p className="sepeudesugerir">(*) SE PUEDE SUGERIR CAMBIOS EN EL ITINERARIO</p> : ""}
                        </Row>
                        <Row className="second-row justify-content-md-center tourdetail-content-container-row tourdetail-content-container-row-programme">
                              <Col lg={5}>
                              <h3>Lo que ofrecemos</h3>
                                    <ul className="tourdetail-content-included-or-not">
                                          <li className="noliststyle">
                                                <span className="bold">Hora de salida:</span> {specificTourContent.horarios.salida}
                                          </li>
                                          <li className="noliststyle">
                                                <span className="bold">Hora de regreso:</span> {specificTourContent.horarios.regreso}
                                          </li>
                                          {
                                                specificTourContent.included.map((content) => {
                                                      return(
                                                            <li>{content}</li>
                                                      );
                                                })
                                          }
                                    </ul>
                              </Col>
                              <Col lg={5}>
                                    <h3>Lo que no incluye</h3>
                                    <ul className="tourdetail-content-included-or-not">
                                    {
                                          specificTourContent.not_included.map((content) => {
                                                return(
                                                      <li>{content}</li>
                                                );
                                          })
                                    }
                                    </ul>
                              </Col>
                        </Row>
                        <Row className="third-row justify-content-md-center tourdetail-content-container-row tourdetail-content-container-row-programme">
                              <Col lg={5}>
                              <h3>Lo que te recomendamos llevar</h3>
                                    <ul className="tourdetail-content-included-or-not">
                                          {
                                          specificTourContent.should_bring.map((content) => {
                                                return(
                                                      <li>{content}</li>
                                                );
                                          })
                                          }
                                    </ul>
                              </Col>
                              <Col lg={5}>
                              </Col>
                        </Row>
                  </Container>
                  <Footer />
            </main>
      );
}

export default TourDetail;