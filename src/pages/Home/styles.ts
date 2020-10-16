import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListOfTypes = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1100px;

  li {
    button {
      height: 100%;
      width: 100%;

      border-radius: 20px;
      background: transparent;

      border: none;
    }

    height: 40px;
    width: 80px;

    border: 2px solid #000;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    list-style: none;
    color: #000;
    margin: 10px 20px;
    cursor: pointer;

    transition: all 0.2s;

    border-color: #ff0000;
    background: ${transparentize(0.3, '#FF0000')};

    &:hover {
      border-color: #f5db13;
      background: ${transparentize(0.3, '#f5db13')};
    }
  }

  .fighting {
    border-color: #c03028;
    background: ${transparentize(0.3, '#c03028')};
  }
  .normal {
    border-color: #a8a878;
    background: ${transparentize(0.3, '#a8a878')};
  }
  .flying {
    border-color: #a890f0;
    background: ${transparentize(0.3, '#a890f0')};
  }
  .poison {
    border-color: #a040a0;
    background: ${transparentize(0.3, '#a040a0')};
  }
  .ground {
    border-color: #e9d396;
    background: ${transparentize(0.3, '#e9d396')};
  }
  .rock {
    border-color: #705848;
    background: ${transparentize(0.3, '#705848')};
  }
  .bug {
    border-color: #a8b820;
    background: ${transparentize(0.3, '#a8b820')};
  }
  .ghost {
    border-color: #705898;
    background: ${transparentize(0.3, '#705898')};
  }
  .steel {
    border-color: #b9b9d0;
    background: ${transparentize(0.3, '#b9b9d0')};
  }
  .fire {
    border-color: #f08030;
    background: ${transparentize(0.3, '#f08030')};
  }
  .water {
    border-color: #6890f0;
    background: ${transparentize(0.3, '#6890f0')};
  }
  .grass {
    border-color: #78c850;
    background: ${transparentize(0.3, '#78C850')};
  }
  .electric {
    border-color: #f8d030;
    background: ${transparentize(0.3, '#f8d030')};
  }
  .psychic {
    border-color: #f85888;
    background: ${transparentize(0.3, '#f85888')};
  }
  .ice {
    border-color: #98d8d8;
    background: ${transparentize(0.3, '#98d8d8')};
  }
  .dragon {
    border-color: #7038f8;
    background: ${transparentize(0.3, '#7038f8')};
  }
  .dark {
    border-color: #705848;
    background: ${transparentize(0.3, '#705848')};
  }
  .fairy {
    border-color: #fa8aac;
    background: ${transparentize(0.3, '#fa8aac')};
  }
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
