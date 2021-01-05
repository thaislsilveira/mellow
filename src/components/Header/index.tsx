import React from 'react';

import { Link } from 'react-router-dom';

import { Container, HeaderContainer, Content } from './styles';

import logoImg from '../../assets/Mellow_Logo.svg';
import perfilImg from '../../assets/Perfil.jpg';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <nav>
          <Link to="/">
            <img src={logoImg} alt="Mellow" />
          </Link>
          <ul className="menu">
            <li className="menu-item">
              <Link to="/recipes">Recipes</Link>
            </li>
            <li className="menu-item">
              <Link to="/go-green">Go Green</Link>
            </li>
            <li className="menu-item">
              <Link to="/princing">Princing</Link>
            </li>
            <li className="menu-item">
              <Link to="/how-it-works">How it works</Link>
            </li>
            <li className="menu-item">
              <img src={perfilImg} alt="Perfil" />
            </li>
          </ul>
        </nav>
      </HeaderContainer>
      <Content />
    </Container>
  );
};

export default Header;
