import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/tour1dia.jpeg';
import img2 from '../../images/tour2dias.jpeg';
import img3 from '../../images/tour3dias.jpeg';
import './carousel.styles.scss';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="tourcarousel-item">
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="tourcarousel-item">
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="tourcarousel-item">
        <img
          className="d-block w-100"
            src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;