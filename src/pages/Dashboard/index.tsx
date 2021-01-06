import React from 'react';
import GoGreen from '../../components/GoGreen';
import Header from '../../components/Header';
import Recipes from '../../components/Recipes';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Recipes />
      <GoGreen />
    </Container>
  );
};

export default Dashboard;
