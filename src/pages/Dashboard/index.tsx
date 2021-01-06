import React from 'react';
import Header from '../../components/Header';
import Recipes from '../../components/Recipes';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Recipes />
    </Container>
  );
};

export default Dashboard;
