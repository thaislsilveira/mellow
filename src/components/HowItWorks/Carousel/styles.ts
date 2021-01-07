import styled from 'styled-components';

export const Container = styled.div`
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

  .image-carousel img {
    padding: 100px;
    height: 759px;
    width: 594px;
  }
`;
