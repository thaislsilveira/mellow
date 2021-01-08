import * as React from 'react';

import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Green from '../../../assets/green.png';
import Red from '../../../assets/red.jpg';

import { Container } from './styles';

const Carousel: React.FC = () => {
  return (
    <Container>
      <Slick infinite centerMode arrows={false} slidesToShow={1}>
        <div>
          <div className="div-carousel">
            <div className="image-carousel">
              <img src={Green} alt=" " />
            </div>
            <div className="text-carousel">
              <h1>How it works</h1>
              <p>
                Culpa qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptartem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi ropeior architecto
                beatae vitae dicta sunt explicabo. Nemo eniem ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eosep quiklop ratione voluptatem
                sequi nesciunt. Neque porro quisquam est, quepi dolorem ipsum
                quia dolor srit amet, consectetur adipisci velit, seid quia non
                numquam eiuris modi tempora incidunt ut labore et dolore magnam
                aliquam quaerat iope
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="div-carousel">
            <div className="image-carousel">
              <img src={Red} alt=" " />
            </div>
            <div className="text-carousel">
              <h1>How it works</h1>
              <p>
                Culpa qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptartem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi ropeior architecto
                beatae vitae dicta sunt explicabo. Nemo eniem ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eosep quiklop ratione voluptatem
                sequi nesciunt. Neque porro quisquam est, quepi dolorem ipsum
                quia dolor srit amet, consectetur adipisci velit, seid quia non
                numquam eiuris modi tempora incidunt ut labore et dolore magnam
                aliquam quaerat iope
              </p>
            </div>
          </div>
        </div>
      </Slick>
    </Container>
  );
};

export default Carousel;
