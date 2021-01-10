import React, { useState } from 'react';

import Slick from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import japaneseFoodImg from '../../../assets/japanese-food.png';
import pastaImg from '../../../assets/pasta.png';
import breadAndAvocadoImg from '../../../assets/bread-and-avocado.png';
import riceAndSaladImg from '../../../assets/rice-and-salad.png';

import { Container } from './styles';

const Carousel: React.FC = () => {
  const arrayImage = [
    japaneseFoodImg,
    pastaImg,
    breadAndAvocadoImg,
    riceAndSaladImg,
    japaneseFoodImg,
    breadAndAvocadoImg,
  ];

  const responsive = [
    {
      breakpoint: 952,
      settings: {
        centerMode: false,
      },
    },
  ];

  return (
    <Container>
      <Slick
        arrows={false}
        dots={false}
        autoplay
        infinite
        centerMode
        variableWidth
        slidesToShow={1}
        responsive={responsive}
      >
        {arrayImage.map(image => {
          return (
            <div className="div-carousel-block">
              <div className="div-carousel">
                <div className="div-carousel-inner">
                  <div className="div-carousel-image">
                    <div
                      className="img-carousel"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </div>
                  <div className="div-carousel-text">
                    <div className="inner-block">
                      <h1>Recipe Name Goes Here</h1>
                      <p>
                        Culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptartem accusantium doloremque laudantium
                      </p>
                      <button type="button" className="div-carouse-button">
                        GO TO RECIPE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slick>
    </Container>
  );
};

export default Carousel;
