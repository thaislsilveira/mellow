import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translatex(-50px);
} to{

  opacity: 1;
  transform: translatex(0);

}
`;

export const Container = styled.div`
  background: #3b3b3b;

  .footer-header {
    nav {
      display: flex;
      justify-content: space-between;
      padding-top: 113px;
    }
    ul {
      padding-left: 160px;
      justify-content: start;

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

    a {
      font: 600 18px Open Sans, sans-serif;
      color: #ffffff;
      text-decoration: none;
      cursor: pointer;
    }
    .logo-item {
      padding-right: 190px;
    }
  }
  .footer-content {
    padding-bottom: 80px;
    padding-left: 190px;
    margin-top: 60px;

    animation: ${appearFromLeft} 1s;
    h1 {
      font: 600 45px Open Sans, sans-serif;
    }
    .color-green {
      color: #00ea87;
    }
    .search {
      margin-top: 80px;
    }

    input {
      opacity: 1;
      font-size: 14px;
      padding: 10px;
      color: #7b7b7b;
      width: 330px;
      height: 46px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border-radius: 10px 0px 0px 10px;
      opacity: 1;
      border: none;
    }

    button {
      font-weight: 600;
      font-size: 14px;
      width: 136px;
      padding: 5px;
      margin-left: 5px;
      color: #2c3834;
      height: 46px;
      background: #00ea87 0% 0% no-repeat padding-box;
      border-radius: 0px 10px 10px 0px;
      opacity: 1;
      border: none;

      &:hover {
        background-color: ${shade(0.2, '#00ea87')};
      }
    }

    .social-network {
      .social {
        margin-top: 64px;
        padding-right: 40px;
        display: inline-block;
      }

      p {
        margin-top: 37px;
        font-size: 12px;
      }
    }
  }

  @media (max-width: 1100px) {
    .footer-header {
      nav {
        padding-top: 50px;
        flex-direction: column;

        ul {
          padding-left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-item {
          order: -1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-right: 0;
          padding-bottom: 20px;
        }
      }
    }

    .footer-content {
      padding-left: 0;
      text-align: center;
    }
  }

  @media (max-width: 470px) {
    .footer-header {
      ul {
        flex-direction: column;
        li {
          margin-bottom: 10px;
        }
      }
    }

    .footer-content {
      input {
        border-radius: 10px;
      }

      button {
        margin-top: 5px;
        border-radius: 10px;
      }
    }
  }

  @media (max-width: 364px) {
    .footer-content {
      h1 {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
`;
