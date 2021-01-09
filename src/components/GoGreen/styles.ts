import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
  background: #f9f9f9;
  align-items: center;
  justify-content: center;

  .images {
    position: relative;

    .effect,
    .landpage {
      display: inline-block;
    }

    .effect img {
      margin-left: 90px;
      position: absolute;
      bottom: 360px;
      width: 250px;
    }

    .landpage img {
      width: 620px;
      margin-left: 90px;
      padding-right: 160px;
    }
  }

  @media (max-width: 1420px) {
    padding: 40px;

    .images {
      display: none;
    }
  }
`;
