import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;

  .slick-center {
    .div-carousel-block {
      .div-carousel {
        .div-carousel-inner {
          .div-carousel-text {
            width: 400px;
          }
        }
      }
    }
  }

  .div-carousel-block {
    padding: 16px;
    .div-carousel {
      height: 100%;
      overflow: hidden;
      box-shadow: 0px 3px 15px rgba(44, 56, 52, 0.15);
      border-radius: 15px;

      .div-carousel-inner {
        align-items: center;
        justify-content: center;

        display: flex;
        width: 100%;
        max-width: 800px;
        height: 480px;

        .div-carousel-image {
          height: 100%;
          .img-carousel {
            overflow: hidden;
            width: 300px;
            height: 480px;
            background-repeat: no-repeat;
            background-size: 135%;
            background-position: center;
          }
        }

        .div-carousel-text {
          width: 0px;
          transition: width 0.35s ease-in-out;
          .inner-block {
            width: 400px;
            overflow: hidden;
          }
          h1 {
            font-family: 'EksellDisplaySmall';
            color: #8b8a92;
            padding: 20px;
            text-align: center;
          }

          p {
            padding: 0 20px 0 20px;
            text-align: center;
            color: #2c3834;
          }

          button {
            font-weight: 600;
            font-size: 14px;
            padding: 5px;
            margin-top: 20px;
            position: relative;
            width: 140px;
            height: 46px;
            color: #2c3834;
            background-color: #00ea87;
            border-radius: 10px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            border: none;

            &:hover {
              background-color: ${shade(0.2, '#00ea87')};
            }
          }
        }
      }
    }
  }

  @media (max-width: 866px) {
    .div-carousel-block {
      .div-carousel {
        .div-carousel-inner {
        }
      }
    }

    .div-carousel-text {
      transition: none;
    }
  }
`;
