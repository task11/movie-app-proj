import { createGlobalStyle } from 'styled-components';
import global from "./global.css";

const GlobalStyle = createGlobalStyle`
  ${global};
  
  ${({ theme }) => {
    return `
      body{
        background-color: ${theme.backgroundColor};
      }
    `;
  }}
`;

export default GlobalStyle;