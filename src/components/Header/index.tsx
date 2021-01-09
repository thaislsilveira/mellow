import React from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';

import { Container, HeaderContainer, Content } from './styles';

import logoImg from '../../assets/mellow-logo.svg';
import perfilImg from '../../assets/Perfil.jpg';
import foodsImg from '../../assets/foods.png';
import panImg from '../../assets/pan.svg';
import avocadoImg from '../../assets/avocado.svg';
import bowlImg from '../../assets/bowl.svg';

const Header: React.FC = () => {
  return (
    <Container id="nav">
      <HeaderContainer>
        <nav>
          <Link activeClass="active" to="nav" spy smooth duration={500}>
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
                  offset={-100}
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
                  offset={-90}
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
      <Content>
        <div className="image-left">
          <img src={foodsImg} alt="foods" />
        </div>
        <div className="main-right">
          <main>
            <h1>Your subscription has expired...</h1>
            <div className="main-p">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                interdum urna, et sagittis libero. In eros nunc, congue eget
                elit at
              </p>
            </div>
            <div className="main-cards">
              <div className="card">
                <h2>Plan 01</h2>
                <p>7 Days trial</p>
                <img src={panImg} alt="Pan" />
                <ul className="card-ul-left">
                  <li className="card-li">Users</li>
                  <li className="card-li">Save Recipes </li>
                  <li className="card-li">Manage Purchase</li>
                  <li className="card-li">Compare Price</li>
                  <li className="card-li">New recipes every week</li>
                </ul>
                <ul className="card-ul-right">
                  <li className="card-li">-</li>
                  <li className="card-li">-</li>
                  <li className="card-li">-</li>
                  <li className="card-li">-</li>
                  <li className="card-li">-</li>
                </ul>
                <button type="button" className="card-button">
                  LET’S TRY
                </button>
              </div>
              <div className="card">
                <h2>Plan 01</h2>
                <p>7 Days trial</p>
                <img src={avocadoImg} alt="Avocado" />
                <ul className="card-ul-left">
                  <li className="card-li">Users</li>
                  <li className="card-li">Save Recipes </li>
                  <li className="card-li">Manage Purchase</li>
                  <li className="card-li">Compare Price</li>
                  <li className="card-li">New recipes every week</li>
                </ul>
                <ul className="card-ul-right">
                  <li className="card-li">-</li>
                  <li className="card-li">-</li>
                  <li className="card-li">-</li>
                  <li className="card-li">-</li>
                  <li className="card-li">-</li>
                </ul>
                <button type="button" className="card-button">
                  LET’S TRY
                </button>
              </div>
              <div className="card">
                <h2>Plan 01</h2>
                <p>7 Days trial</p>
                <img src={bowlImg} alt="Bowl" />
                <ul className="card-ul-left">
                  <li className="card-li">Users</li>
                  <li className="card-li">Save Recipes </li>
                  <li className="card-li">Manage Purchase</li>
                  <li className="card-li">Compare Price</li>
                  <li className="card-li">New recipes every week</li>
                </ul>
                <ul className="card-ul-right">
                  <li className="card-li">-</li>
                  <li className="card-li">-</li>
                  <li className="card-li">-</li>
                  <li className="card-li">-</li>
                  <li className="card-li">-</li>
                </ul>
                <button type="button" className="card-button">
                  LET’S TRY
                </button>
              </div>
            </div>
          </main>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
