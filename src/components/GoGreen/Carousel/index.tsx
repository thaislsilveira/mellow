import * as React from 'react';

import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Ocado from '../../../assets/ocado-seeklogo.com.svg';
import Tesco from '../../../assets/tesco-seeklogo.com.svg';
import Wtr from '../../../assets/wtr-logo.svg';

import { Container } from './styles';

const Carousel: React.FC = () => {
  return (
    <Container>
      <Slick infinite centerMode slidesToShow={1}>
        <div className="div-carousel">
          <h1>Go Green</h1>
          <p>
            Culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptartem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi ropeior architecto beatae vitae dicta
            sunt explicabo. Nemo eniem ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eosep quiklop ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, quepi dolorem ipsum quia dolor srit amet, consectetur
            adipisci velit, seid quia non numquam eiuris modi tempora incidunt
            ut labore et dolore magnam aliquam quaerat iope
          </p>
          <div className="logos">
            <div className="logo">
              <img src={Wtr} alt="effect" />
            </div>
            <div className="logo">
              <img src={Tesco} alt="effect" />
            </div>
            <div className="logo">
              <img src={Ocado} alt="effect" />
            </div>
          </div>
        </div>
        <div className="div-carousel">
          <h1>About us</h1>
          <p>
            Culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptartem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi ropeior architecto beatae vitae dicta
            sunt explicabo. Nemo eniem ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eosep quiklop ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, quepi dolorem ipsum quia dolor srit amet, consectetur
            adipisci velit, seid quia non numquam eiuris modi tempora incidunt
            ut labore et dolore magnam aliquam quaerat iope
          </p>
        </div>
      </Slick>
    </Container>
  );
};

export default Carousel;
