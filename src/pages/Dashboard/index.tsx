import React from 'react';
import Delicious from '../../components/Delicious';
import Footer from '../../components/Footer';

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
      <Delicious />
      <Footer />
    </Container>
  );
};

export default Dashboard;
