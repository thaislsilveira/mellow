import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 3rem;
  background: #2bcfa2;

  @media (max-width: 1358px) {
    padding-bottom: 60px;
  }
`;

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2000;
  transition: all 0.5s ease;
  top: 0;
  background: #2bcfa2;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu-responsive {
      margin-right: 20px;
    }
  }
  nav a img {
    margin: 30px 20px;
  }

  ul {
    justify-content: start;
    align-items: center;
    display: flex;
    margin: 0 20px 0 0;

    right: 0;
    top: 0;

    font-size: 18px;
  }

  li {
    margin-left: 32px;
    list-style-type: none;
  }

  li a {
    font: 600 18px Open Sans, sans-serif;
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
  }

  li img {
    margin: 20px 0 0 0;
    padding: 5px;
    width: 73px;
    height: 73px;
    border-radius: 98px;
    align-self: center;
    border: 2px solid #f2f2f2;
    opacity: 1;
  }

  #menu-checkbox {
    display: none;
  }

  @media (max-width: 1100px) {
    position: relative;
    nav {
      position: relative;
      flex-direction: column;
      > a {
        margin-right: auto;
      }
      .menu-responsive {
        width: 100%;
        margin-right: 0;
        label {
          width: 30px;
          height: 22px;
          display: block;
          position: absolute;
          right: 40px;
          top: 40px;

          cursor: pointer;
        }

        label span {
          width: 100%;
          height: 5px;
          display: block;
          position: absolute;
          transition: 0.25s ease-in-out;

          background: #ffffff;
          border-radius: 30px;
        }

        label span:nth-child(1) {
          top: 0;
        }

        label span:nth-child(2) {
          top: 8px;
        }

        label span:nth-child(3) {
          top: 16px;
        }

        #menu-checkbox {
          display: block;
          z-index: 2;
          position: absolute;
          opacity: 0;
        }

        #menu-checkbox:checked + label span:nth-child(1) {
          top: 8px;
          transform: rotate(-45deg);
        }

        #menu-checkbox:checked + label span:nth-child(2) {
          opacity: 0;
        }

        #menu-checkbox:checked + label span:nth-child(3) {
          top: 8px;
          transform: rotate(45deg);
        }

        ul {
          min-width: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          left: 0;
          top: 70px;
          list-style: none;

          transition: 0.2s ease-in-out;
          z-index: 1;
          background: #00ea87;
          overflow: hidden;
          max-height: 0;
        }

        #menu-checkbox:checked ~ ul {
          transform: translateY(0);
          opacity: 1;
          overflow: hidden;
          max-height: 500px;
          padding: 10px 0;
        }

        li {
          margin-left: 0;
          margin-right: 32px;
        }
      }
    }
  }

  @media (max-width: 590px) {
    .menu-responsive {
      ul {
        flex-direction: column;
      }

      li {
        padding-bottom: 5px;
      }
    }
  }
`;

const fadein = keyframes`
from {

  opacity: 0.3;


} to{

  opacity: 1;
  transition-duration: 10s;

}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .image-left,
  .main-right {
    display: inline-block;
  }

  .image-left img {
    width: 500px;

    animation: ${fadein} 1s;
  }

  .main-right {
    main h1 {
      font-size: 50px;
      font-family: 'EksellDisplaySmall';
    }

    p {
      max-width: 750px;
      margin-top: 20px;
      font-size: 20px;
    }

    .main-cards {
      margin-top: 20px;
    }

    .card {
      width: 277px;
      height: 433px;
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 10px;
      opacity: 1;
      display: inline-block;
      margin-right: 10px;
    }

    .card h2 {
      font: 600 29px Open Sans, sans-serif;
      color: #00a35e;
      text-align: left;
      padding: 10px 20px;
    }

    .card p {
      font-size: 18px;
      color: #df3558;
      padding: 10px 20px;
    }

    .card img {
      width: 114px;
      height: 114px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .card-ul-left,
    .card-ul-right {
      display: inline-block;
    }

    .card-ul-right {
      padding: 10px 0;
    }

    .card-ul-left {
      padding: 10px 20px;
    }

    .card-li {
      font-size: 14px;
      list-style-type: none;
      color: #2c3834;
      padding: 5px 10px;
    }

    button {
      font-weight: 600;
      font-size: 14px;
      position: relative;
      width: 124px;
      height: 46px;
      color: #2c3834;
      background-color: #00ea87;
      border-radius: 10px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      bottom: -8px;
      border: none;

      &:hover {
        background-color: ${shade(0.2, '#00ea87')};
      }
    }
  }
  @media (max-width: 1358px) {
    .image-left {
      display: none;
    }
  }

  @media (max-width: 1100px) {
    .main-right {
      main {
        h1,
        .main-p p {
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 859px) {
    .main-right {
      .main-cards {
        .card {
          margin-left: auto;
          margin-right: auto;
          display: block;
          margin-bottom: 30px;
        }
      }
    }
  }

  @media (max-width: 638px) {
    .main-right {
      .main-p p {
        padding: 0 10px 0 10px;
      }
    }
  }
`;
