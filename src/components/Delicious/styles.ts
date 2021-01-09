import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  .content-left {
    margin-top: 20px;
  }

  .content-top {
    margin-right: 20px;
    h1 {
      color: #00a35e;
      font-size: 86px;
      margin-right: 20px;
    }

    p {
      color: #2c3834;
      max-width: 538px;
    }

    button {
      font-weight: 600;
      font-size: 14px;
      width: 124px;
      height: 46px;
      color: #2c3834;
      background-color: #00ea87;
      border-radius: 10px;

      margin-top: 40px;
      border: none;

      &:hover {
        background-color: ${shade(0.2, '#00ea87')};
      }
    }
  }

  .content-bottom {
    margin-top: 100px;
    p {
      color: #2c3834;
    }

    img {
      margin-top: 10px;
      margin-right: 5px;
      max-width: 124px;
    }

    .content-bottom-image {
      display: inline-block;
    }
  }

  .content-right {
    width: 100%;
    max-width: 700px;

    .leaflet-container {
      margin-top: 40px;
      height: 500px !important;
    }
  }

  @media (max-width: 1546px) {
    padding: 60px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  @media (max-width: 364px) {
    .content-left {
      margin-top: 0;

      h1 {
        font-size: 60px;
      }
      h1,
      p {
        text-align: center;
      }

      button {
        margin-left: auto;
        margin-right: auto;
        display: block;
      }

      .content-bottom-image {
        display: block;
        text-align: center;
      }



      }
    }

    .content-top {
      margin-right: 0;
    }
  }
`;
