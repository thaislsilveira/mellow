import React from 'react';

import { Link } from 'react-scroll';

import { Container, HeaderContainer } from './styles';

import logoImg from '../../assets/mellow-logo.svg';
import perfilImg from '../../assets/Perfil.jpg';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <nav>
          <Link
            className="logo"
            activeClass="active"
            to="top"
            spy
            smooth
            duration={500}
          >
            <img src={logoImg} alt="Mellow" />
          </Link>
          <div className="menu-responsive">
            <input id="menu-checkbox" type="checkbox" />
            <label htmlFor="menu-checkbox">
              <span />
              <span />
              <span />
            </label>
            <ul className="menu">
              <li className="menu-item">
                <Link
                  activeClass="active"
                  to="recipes"
                  spy
                  smooth
                  duration={500}
                >
                  Recipes
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  activeClass="active"
                  to="go-green"
                  spy
                  smooth
                  duration={500}
                >
                  Go Green
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  activeClass="active"
                  to="princing"
                  spy
                  smooth
                  duration={500}
                >
                  Princing
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  activeClass="active"
                  to="how-it-works"
                  spy
                  smooth
                  duration={500}
                >
                  How it works
                </Link>
              </li>
              <li className="menu-item">
                <img src={perfilImg} alt="Perfil" />
              </li>
            </ul>
          </div>
        </nav>
      </HeaderContainer>
      <div id="top" className="top" />
    </Container>
  );
};

export default Header;
