import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 3rem;
  background: #2bcfa2;
`;

export const HeaderContainer = styled.header`
  nav a img {
    margin: 30px 20px;
  }

  ul {
    justify-content: start;
    align-items: center;
    display: flex;
    margin-left: -14%;
    position: absolute;
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
  }

  .main-right {
    main h1 {
      font-size: 50px;
      font-family: Open Sans, serif;
    }

    p {
      max-width: 750px;
      margin-top: 20px;
      font-size: 20px;
      font-family: Open Sans, serif;
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
      position: relative;
      width: 124px;
      height: 46px;
      color: #2c3834;
      background-color: #00ea87;
      border-radius: 10px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      bottom: -20px;
      border: none;

      &:hover {
        background-color: ${shade(0.2, '#00ea87')};
      }
    }
  }
`;
