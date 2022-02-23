import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`        // Essas duas aspas é uma funcao do javaScript (template literals)
  :root {
    --background: #f0f2f5;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased; // Fontes mais "nitidas"
  }
`
