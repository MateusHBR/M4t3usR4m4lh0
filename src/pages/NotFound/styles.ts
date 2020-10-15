import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 100px;

  background: #c5312a;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      position: absolute;
      left: 31.5%;
      top: 30%;
      height: 400px;
      width: 400px;
    }

    h1 {
      font-size: 550px;
      line-height: 300px;
      color: #571b17;
    }
  }

  p {
    margin-top: 80px;
    font-size: 40px;
  }

  a {
    height: 70px;
    width: 350px;
    background: #f2cb07;
    border-radius: 20px;
    box-shadow: inset 0px -9px 0px ${shade(0.2, '#f2cb07')};

    text-decoration: none;
    color: #571b17;
    font-size: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.5s;

    &:hover {
      background: ${shade(0.2, '#f2cb07')};
    }
  }

  @media only screen and (max-width: 900px) {
    padding: 0;
    margin: 0;

    div {
      img {
        opacity: 0;
      }

      h1 {
        font-size: 150px;
        line-height: 50px;
      }
    }

    p {
      margin-top: 20px;
      font-size: 20px;
    }

    a {
      margin: 0;

      height: 50px;
      width: 80%;
      font-size: 16px;
    }
  }
`;
