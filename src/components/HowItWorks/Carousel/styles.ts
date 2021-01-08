import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px 0;
  overflow: hidden;

  .div-carousel {
    display: flex;
    align-items: center;
    justify-content: center;

    .image-carousel,
    .text-carousel {
      display: inline-block;
    }

    .image-carousel {
      padding: 60px;
      img {
        width: 100%;
        max-width: 460px;

        border-radius: 10px;
      }
    }

    h1,
    p {
      color: #ffffff;
    }

    p {
      margin-top: 20px;
      max-width: 639px;
    }
  }

  @media (max-width: 762px) {
    .div-carousel {
      display: block;

      .text-carousel {
        padding: 0 20px 0 20px;
      }
    }
  }
`;
