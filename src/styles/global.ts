import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F5F5F5;
    color: #fff;
    -webkit-font-smoothing: antialiased;

  }

  body, input, button {
    font: 600 18px Nunito, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
