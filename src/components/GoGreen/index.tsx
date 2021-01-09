import React from 'react';

import { Container } from './styles';

import effectImg from '../../assets/effect.svg';
import bellPepperImg from '../../assets/bell-pepper.png';

import Carousel from './Carousel';

const GoGreen: React.FC = () => {
  return (
    <>
      <Container id="go-green">
        <div className="images">
          <div className="effect">
            <img src={effectImg} alt="Effects" />
          </div>
          <div className="pepper">
            <img src={bellPepperImg} alt="Bell Pepper" />
          </div>
        </div>
        <Carousel />
      </Container>
    </>
  );
};

export default GoGreen;
