import React from 'react';

import { Container } from './styles';

import Landpage from '../../assets/Landpage.png';
import Effect from '../../assets/Grupo-1864.svg';

const GoGreen: React.FC = () => {
  return (
    <>
      <Container>
        <div className="images">
          <div className="effect">
            <img src={Effect} alt="effect" />
          </div>
          <div className="landpage">
            <img src={Landpage} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default GoGreen;
