import * as React from 'react';

import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../../../assets/10.png';
import image2 from '../../../assets/fod-112.png';
import image3 from '../../../assets/food-086.png';
import image4 from '../../../assets/food-114.png';

import { Container } from './styles';

const Carousel: React.FC = () => {
  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <Container>
      <Slick
        autoplay
        infinite
        centerMode
        slidesToShow={5}
        responsive={responsive}
      >
        <div className="div-carousel">
          <img src={image3} alt="Plates" />
        </div>
        <div className="div-carousel">
          <img src={image2} alt="Plates" />
        </div>
        <div className="div-carousel">
          <img src={image4} alt="Plates" />
        </div>
        <div className="div-carousel">
          <img src={image1} alt="Plates" />
        </div>
        <div className="div-carousel">
          <img src={image4} alt="Plates" />
        </div>
        <div className="div-carousel">
          <img src={image2} alt="Plates" />
        </div>
        <div className="div-carousel">
          <img src={image1} alt="Plates" />
        </div>
      </Slick>
    </Container>
  );
};

export default Carousel;
