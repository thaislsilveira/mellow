import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px 0;
  overflow: hidden;
  .div-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .div-carousel h1,
  .div-carousel p {
    color: #ffffff;
  }

  .div-carousel p {
    margin-top: 20px;
    max-width: 639px;
  }

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
`;
