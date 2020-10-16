import styled from 'styled-components';
import { transparentize } from 'polished';

interface MainProps {
  color: string;
}

export const Container = styled.div<MainProps>`
  height: 100vh;
  width: 100vw;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  header {
    img {
      position: absolute;
      left: 60px;
      top: 5px;
      /* margin-left: 100px; */
    }
  }

  a.backHome {
    position: absolute;
    left: 10px;
    top: 20px;

    svg {
      color: #000;

      transition: color 0.3s;
      &:hover {
        color: rgba(0, 0, 0, 0.7);
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    margin-top: 150px;

    height: 60%;
    width: 90%;
    max-width: 680px;
    max-height: 580px;

    border-radius: 50px;
    background-color: ${transparentize(0.6, '#f5db13')};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);

    img {
      margin-top: -25%;
      height: 40%;
      width: 40%;
    }

    transition: transform 0.3s;

    &:hover {
      transform: translateY(-15px);
    }

    h1 {
      color: #000;
      font-size: 50px;
      font-weight: 700;
    }

    h3 {
      color: #000;
    }
  }
`;

export const PokemonStatus = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #000;
  text-align: center;
`;
