import styled from 'styled-components';

export const Container = styled.div`
  height: 750px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 3rem;
  background: #2bcfa2;
`;

export const HeaderContainer = styled.header`
  nav a img {
    margin: 30px 20px;
  }

  ul.menu {
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

  li.menu-item {
    margin-left: 32px;
    list-style-type: none;
  }

  li.menu-item a {
    font-weight: bold;
    font-family: Open Sans, serif;
    color: #ffffff;
    text-decoration: none;
  }

  li.menu-item img {
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

export const Content = styled.div``;
