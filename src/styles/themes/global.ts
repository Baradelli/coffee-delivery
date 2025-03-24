import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 130%;
  }

  button {
    outline: none;
    border: none;
  }

  body {
    background: ${(props) => props.theme.base.background};
    color: ${(props) =>
      props.theme.base.text}; // atualizado para usar a cor existente
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.base.card};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.base.hover}; 
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.base.label}; 
  }

  .custom-border-radius {
    border-radius: 6px 35px 6px 35px;
  }
`;
