import * as React from 'react';

import Slick from 'react-slick';
import Zoom from 'react-medium-image-zoom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'react-medium-image-zoom/dist/styles.css';

import japaneseFoodImg from '../../../assets/japanese-food.png';
import pastaImg from '../../../assets/pasta.png';
import breadAndAvocadoImg from '../../../assets/bread-and-avocado.png';
import riceAndSaladImg from '../../../assets/rice-and-salad.png';

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
        arrows
        autoplay
        infinite
        centerMode
        slidesToShow={5}
        responsive={responsive}
      >
        <div className="div-carousel">
          <Zoom zoomMargin={200}>
            <img src={breadAndAvocadoImg} alt="Bread and Avocado" />
          </Zoom>
        </div>
        <div className="div-carousel">
          <Zoom zoomMargin={200}>
            <img src={pastaImg} alt="Pasta" />
          </Zoom>
        </div>
        <div className="div-carousel">
          <Zoom zoomMargin={200}>
            <img src={riceAndSaladImg} alt="Rice and Salad" />
          </Zoom>
        </div>
        <div className="div-carousel">
          <Zoom zoomMargin={200}>
            <img src={japaneseFoodImg} alt="Japanese Food" />
          </Zoom>
        </div>
        <div className="div-carousel">
          <Zoom zoomMargin={200}>
            <img src={riceAndSaladImg} alt="Rice and Salad" />
          </Zoom>
        </div>
        <div className="div-carousel">
          <Zoom zoomMargin={200}>
            <img src={pastaImg} alt="Pasta" />
          </Zoom>
        </div>
        <div className="div-carousel">
          <Zoom zoomMargin={200}>
            <img src={japaneseFoodImg} alt="Japanese Food" />
          </Zoom>
        </div>
      </Slick>
    </Container>
  );
};

export default Carousel;
