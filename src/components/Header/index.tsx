import React from 'react';

import { Link } from 'react-router-dom';

import { Container, HeaderContainer, Content } from './styles';

import logoImg from '../../assets/Mellow_Logo.svg';
import perfilImg from '../../assets/Perfil.jpg';
import headerImg from '../../assets/Photo-05.png';
import panImg from '../../assets/Grupo-1852.svg';
import fruitImg from '../../assets/Grupo-1844.svg';
import mealImg from '../../assets/Grupo-1832.svg';

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
      <Content>
        <div className="image-left">
          <img src={headerImg} alt="Alimentos" />
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
                <img src={fruitImg} alt="Pan" />
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
                <img src={mealImg} alt="Pan" />
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
