import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import img1 from '../../../images/cars (1).png';
import img2 from '../../../images/cars (2).png';
import img3 from '../../../images/cars (3).png';

const Banner = () => {
  return (
    <Container fluid >
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Volvo S90</h3>
            <p>This is Volvo s90 which is very attarctive for looking, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Audi e-tron GT</h3>
            <p>Audi is one of the highly cost Car in the World </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Force Motors Gurkha</h3>
            <p>Force Motors Gurkha is one of the finest car in the world , vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;