import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  height: 70px;
  width: 100vw;

  background: #f5db13;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);

  img {
    margin-left: 30px;
  }
`;

export const GridView = styled.div`
  margin: 30px 0;
  width: 100vw;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px 20px;
  justify-content: center;
  align-items: center;

  > div {
    height: 350px;
    border-radius: 0 50px;
    background: #ddd;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    transition: transform 0.4s;

    &:hover {
      transform: translateY(-15px);
    }
  }
`;
