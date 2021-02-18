import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  body {
    background: #3F3F3F;
    display: flex;
    align-items: center;
    font-family: Open-sans, Arial, Helvetica, sans-serif, sans-serif;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(2turn);
    }
  }
`;

export default GlobalStyle;