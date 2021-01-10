import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;

  .div-carousel {
    height: 100%;

    h1,
    p {
      color: #2c3834;
    }

    p {
      margin-top: 20px;
      max-width: 639px;
    }

    .logos {
      margin-top: 40px;
    }
    .logo {
      padding-right: 40px;
      display: inline-block;
    }
  }

  @media (max-width: 1100px) {
    padding: 40px;
  }

  @media (max-width: 802px) {
    .div-carousel {
      padding: 10px;
    }
  }

  @media (max-width: 708px) {
    .div-carousel {
      .logos {
        text-align: center;
        .logo {
          padding-bottom: 20px;
        }
      }
    }
  }
`;
