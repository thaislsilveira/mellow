import React from 'react';

import { Link as LinkSocial } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

import logoImg from '../../assets/mellow-logo.svg';
import facebookImg from '../../assets/icon-facebook.svg';
import instagramImg from '../../assets/icon-instagram.svg';
import pinterestImg from '../../assets/icon-pinterest.svg';
import twitterImg from '../../assets/icon-twitter.svg';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="footer-header">
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <Link
                activeClass="active"
                to="go-green"
                spy
                smooth
                offset={-90}
                duration={500}
              >
                ABOUT US
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
                CONTACT
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
                GO GREEN
              </Link>
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
            <LinkSocial to="https://www.facebook.com/">
              <img src={facebookImg} alt="Facebook Logo" />
            </LinkSocial>
          </div>
          <div className="social">
            <LinkSocial to="https://twitter.com/">
              <img src={twitterImg} alt="Twitter Logo" />
            </LinkSocial>
          </div>
          <div className="social">
            <LinkSocial to="https://www.instagram.com/">
              <img src={instagramImg} alt="Instagram Logo" />
            </LinkSocial>
          </div>
          <div className="social">
            <LinkSocial to="https://pinterest.com/">
              <img src={pinterestImg} alt="Pinterest Logo" />
            </LinkSocial>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
