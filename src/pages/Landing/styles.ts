import styled from 'styled-components';
import { shade } from 'polished';

import Pikachu from '../../images/Pikachu.svg';
import Pokeball from '../../images/Pokeball.svg';

export const Container = styled.div`
  background: linear-gradient(180deg, #f5db13 0%, #f2b807 100%);
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 100%;
    height: 100%;

    max-width: 1200px;
    max-height: 680px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-image: url(${Pokeball}), url(${Pikachu});
    background-position: 100%, 60%;
    background-repeat: no-repeat;

    a {
      height: 70px;
      width: 240px;
      background: #c5312a;
      border-radius: 20px;
      box-shadow: inset 0px -9px 0px ${shade(0.2, '#C5312A')};

      text-decoration: none;
      color: #f5f5f5;
      font-size: 20px;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: background-color 0.5s;

      &:hover {
        background: ${shade(0.2, '#C5312A')};
      }
    }
  }

  @media only screen and (max-width: 600px) {
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: none;
    }

    div a {
      width: 90%;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  max-width: 350px;

  h1 {
    font-size: 80px;
    font-weight: 800;
    line-height: 75px;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 60px;
      line-height: 55px;
      text-align: center;
    }
  }
`;
