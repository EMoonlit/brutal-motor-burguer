import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
    background: #3F3F3F;
    justify-content: center;
    align-items: center;
    font-family: Open-sans, Arial, Helvetica, sans-serif, sans-serif;
}
`;

export default GlobalStyle;