import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './tourcard.styles.scss';
import { Link } from "gatsby";

const TourCard = ({image, title, titleOptional, price, description, pagelink}) => {
      return (
            <Card className="tourcard-container">
                  <Card.Img className="img-fluid tourcard-image" src={image} alt="Tours 1 dia image"/>
                  <Card.Body className="tourcard-content">
                        <Card.Title className="tourcard-title">
                              {title}
                              <span className="tourcard-price">
                                    De {price}$ USD
                              </span>
                        </Card.Title>
                        <p className="tourcard-title-optional">
                              {titleOptional}
                        </p>
                        <Card.Text className="tourcard-description">{description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="tourcard-footer">
                        <Button style={{ width: '6rem' }} variant="primary">
                              <Link to={`/${pagelink}`}>
                                    VER MÁS
                              </Link>
                        </Button>
                  </Card.Footer>

            </Card>
      
      );
}

export default TourCard;