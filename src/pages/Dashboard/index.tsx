import React from 'react';

import GoGreen from '../../components/GoGreen';
import Header from '../../components/Header';
import HowItWorks from '../../components/HowItWorks';
import Recipes from '../../components/Recipes';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Recipes />
      <GoGreen />
      <HowItWorks />
    </Container>
  );
};

export default Dashboard;
