import React from 'react';
import Carousel from './Carousel';

import { Container, Content } from './styles';

const Recipes: React.FC = () => {
  return (
    <>
      <Container id="recipes">
        <Content>
          <h1>Recipes</h1>
          <div className="content-p">
            <p>
              Culpa qui officia deserunt mollit anim id est laborum. Sed ut
              perspiciatis unde omnis iste natus error sit voluptartem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi ropeior architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </Content>
        <Carousel />
      </Container>
    </>
  );
};

export default Recipes;
