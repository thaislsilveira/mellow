import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  background: #2bcfa2;

  .top {
    height: 100px;
    width: 100%;
  }

  @media (max-width: 1100px) {
    .top {
      height: 10px;
    }
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

    .logo {
      cursor: pointer;
    }

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

    .active {
      color: #8b8a92;
    }
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
