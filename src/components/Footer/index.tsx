import React from 'react';

import { Link } from 'react-scroll';

import logoImg from '../../assets/mellow-logo.svg';
import facebookImg from '../../assets/icon-facebook.svg';
import instagramImg from '../../assets/icon-instagram.svg';
import pinterestImg from '../../assets/icon-pinterest.svg';
import twitterImg from '../../assets/icon-twitter.svg';

import { Container } from './styles';

const Footer: React.FC = () => {
  const arraySocial = [
    {
      link: 'https://www.facebook.com/',
      img: facebookImg,
      alt: 'Facebook Logo',
    },
    {
      link: 'https://twitter.com/',
      img: twitterImg,
      alt: 'Twitter Logo',
    },
    {
      link: 'https://www.instagram.com/',
      img: instagramImg,
      alt: 'Instagram Logo',
    },
    {
      link: 'https://pinterest.com/',
      img: pinterestImg,
      alt: 'Pinterest Logo',
    },
  ];

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
          {arraySocial.map(item => {
            return (
              <div key={item.alt} className="social">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${item.link}`}
                >
                  <img src={`${item.img}`} alt={`${item.alt}`} />
                </a>
              </div>
            );
          })}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
