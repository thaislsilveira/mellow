import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const fadein = keyframes`
  from {
    opacity: 0.3;

  } to{
    opacity: 1;
    transition-duration: 10s;
  }
`;

export const Container = styled.div`
  background: #2bcfa2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 150px;

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
      margin-right: 40px;
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
  @media (max-width: 1454px) {
    .image-left {
      display: none;
    }
    padding-top: 20px;
    .main-right {
      .main-cards {
        .card {
          margin: 0 20px;
        }
      }
      main {
        h1,
        .main-p {
          text-align: center;
          p {
            margin-left: auto;
            margin-right: auto;
          }
        }
      }
    }
  }

  @media (max-width: 950px) {
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
