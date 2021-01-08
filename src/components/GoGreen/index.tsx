import React from 'react';

import { Container } from './styles';

import Landpage from '../../assets/Landpage.png';
import Effect from '../../assets/Grupo-1864.svg';

import Carousel from './Carousel';

const GoGreen: React.FC = () => {
  return (
    <>
      <Container id="go-green">
        <div className="images">
          <div className="effect">
            <img src={Effect} alt="effect" />
          </div>
          <div className="landpage">
            <img src={Landpage} alt="" />
          </div>
        </div>
        <Carousel />
      </Container>
    </>
  );
};

export default GoGreen;
