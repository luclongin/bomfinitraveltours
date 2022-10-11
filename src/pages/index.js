import React from "react";
import TourCard from "../components/tourcard/tourcard.component";
import tour1dia from '../images/tour1dia.jpeg';
import tour2dias from '../images/tour2dias.jpeg';
import tour3dias from '../images/tour3dias.jpeg';
import tourprivada from '../images/tourprivada.jpeg';
import './index.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Navigation from "../components/navigation/navigation.components";
import Footer from "../components/footer/footer.component";
import WhatsappIcon from '../components/whatsappIcon/whatsappIcon.component';

import "@popperjs/core/dist/umd/popper.min";
import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = () => {


  return (
    <main>
      <Helmet>
        <title>Bomfini Travel Tours</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="//fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Raleway:wght@400;500&display=swap" rel="stylesheet"/> 
        <script src="https://kit.fontawesome.com/aa0fe87a05.js" crossorigin="anonymous"></script>
        <link href="//fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" /> 
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </Helmet>
      <div className="landing-page-container">  
        <Navigation className="homepage-navigation" withBreadcrumb="hidden"/>            
        <WhatsappIcon />
        <Container fluid className="homepage-main-cover-container">
          <div className="homepage-main-cover">
            
            <div className="homepage-main-footer">
              <a href="">
                Descrube nuestros tours
                <FontAwesomeIcon className="homepage-main-footer-icon" icon={faChevronDown} />    
              </a>
            </div>
          </div> 
        </Container>
      </div>

      <Container fluid className="homepage-content tourcards-container">  
        <Row className="what-we-offer-text justify-content-md-center">
          Ven a descubrir el Salar de Uyuni con nosotros.<br/>
        </Row>
        <div className="tourcard-row-container">
          <Row className="tourcard-row justify-content-md-center">
            <Col xs="auto" sm={6} md={6} lg={5} xl={5} xxl={5}>
              <TourCard
                title="Tour de 1 día"
                price="45"
                description="Lorem ipsum dolor sit amet, te est populo consequuntur, qui facilisi instructior eu, quo ex modus singulis atomorum. Vim posse nostrum adolescens in. Ne sale legimus has, eum quod urbanitas assentior eu."
                image={tour1dia}
                pagelink='tour1dia'
              />
            </Col>
            <Col xs="auto" sm={6} md={6} lg={5} xl={5} xxl={5}>
              <TourCard
                title="Tour de 2 días"
                price="95"
                description="Lorem ipsum dolor sit amet, te est populo consequuntur, qui facilisi instructior eu, quo ex modus singulis atomorum. Vim posse nostrum adolescens in. Ne sale legimus has, eum quod urbanitas assentior eu."
                image={tour2dias}
                pagelink='tour2dias'
              />
            </Col>
          </Row>
          <Row className="tourcard-row justify-content-md-center">
            <Col xs="auto" sm={6} md={6} lg={5} xl={5} xxl={5}>
              <TourCard
                title="Tour de 3 días"
                price="130"
                description="Lorem ipsum dolor sit amet, te est populo consequuntur, qui facilisi instructior eu, quo ex modus singulis atomorum. Vim posse nostrum adolescens in. Ne sale legimus has, eum quod urbanitas assentior eu."
                image={tour3dias}
                pagelink='tour3dias'
              />
            </Col>
            <Col xs="auto" sm={6} md={6} lg={5} xl={5} xxl={5}>
              <TourCard
                title="Tour privados"
                price="70"
                description="Lorem ipsum dolor sit amet, te est populo consequuntur, qui facilisi instructior eu, quo ex modus singulis atomorum. Vim posse nostrum adolescens in. Ne sale legimus has, eum quod urbanitas assentior eu."
                image={tourprivada}
                pagelink='privados'
              />
            </Col>
          </Row>
        </div>
      </Container>
      
      <Footer /> 
      
  </main>
  )
}


export default IndexPage;