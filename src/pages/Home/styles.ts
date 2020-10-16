import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridView = styled.div`
  margin: 30px 0;
  width: 100vw;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;

    div {
      height: 60px;
      border-radius: 0 50px;
      background: ${transparentize(0.6, '#f5db13')};
      box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
      cursor: pointer;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 24px;

      transition: transform 0.4s;

      &:hover {
        transform: translateX(15px);
      }

      p {
        color: #000;
        font-size: clamp(1rem, 1.8rem, 2rem);
        font-style: italic;
        font-weight: 500;
      }
    }
  }
`;
