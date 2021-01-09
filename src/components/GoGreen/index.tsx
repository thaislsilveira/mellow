import React from 'react';

import { Container } from './styles';

import effectImg from '../../assets/effect.svg';
import bellPepperImg from '../../assets/bell-pepper.png';

import Carousel from './Carousel';

const GoGreen: React.FC = () => {
  const arrayInformation = [
    {
      class: 'effect',
      img: effectImg,
      alt: 'Effects',
    },
    {
      class: 'pepper',
      img: bellPepperImg,
      alt: 'Bell Pepper',
    },
  ];

  return (
    <>
      <Container id="go-green">
        <div className="images">
          {arrayInformation.map(item => {
            return (
              <div className={`${item.class}`}>
                <img src={`${item.img}`} alt={`${item.alt}`} />
              </div>
            );
          })}
        </div>
        <Carousel />
      </Container>
    </>
  );
};

export default GoGreen;
