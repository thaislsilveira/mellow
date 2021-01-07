import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/Mellow_Logo.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import pinterest from '../../assets/icons-pinterest.svg';
import twitter from '../../assets/icons-twitter.svg';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="footer-header">
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <Link to="/about">ABOUT US</Link>
            </li>
            <li className="menu-item">
              <Link to="/contact">CONTACT</Link>
            </li>
            <li className="menu-item">
              <Link to="/go-green">GO GREEN</Link>
            </li>
            <li className="menu-item">
              <Link to="/terms-e-conditions">TERMS & CONDITIONS</Link>
            </li>
          </ul>
          <Link to="/" className="logo-item">
            <img src={logoImg} alt="Mellow" />
          </Link>
        </nav>
      </div>
      <div className="footer-content">
        <h1>Cool phrase goes here</h1>
        <h1 className="color-green">Maybe in two lines</h1>
        <div className="search">
          <input type="search" id="search" placeholder="Email Address" />
          <button type="button">SUBSCRIBE</button>
        </div>
        <div className="social-network">
          <div className="social">
            <img src={facebook} alt="Facebook" />
          </div>
          <div className="social">
            <img src={twitter} alt="Twitter" />
          </div>
          <div className="social">
            <img src={instagram} alt="Instagram" />
          </div>
          <div className="social">
            <img src={pinterest} alt="Pinterest" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
