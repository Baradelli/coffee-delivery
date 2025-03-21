import { createGlobalStyle } from "styled-components";

/**
 * ### Font Weight Equivalences:
 * - `font-weight: 100` → Thin
 * - `font-weight: 200` → Extra Light
 * - `font-weight: 300` → Light
 * - `font-weight: 400` → Regular
 * - `font-weight: 500` → Medium
 * - `font-weight: 600` → Semi Bold
 * - `font-weight: 700` → Bold
 * - `font-weight: 800` → Extra Bold
 * - `font-weight: 900` → Black
 */
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .title-xl {
    font-size: 3rem;
    font-weight: 800;
  }

  .title-l {
    font-size: 2rem;
    font-weight: 800;
  }

  .title-m {
    font-size: 1.5rem;
    font-weight: 800;
  }

  .title-s {
    font-size: 1.25rem;
    font-weight: 700;
  }

  .title-xs {
    font-size: 1.125rem;
    font-weight: 700;
  }

  .text-l {
    font-size: 1.25rem;
    font-weight: 700;
  }

  .text-m {
    font-size: 1rem;
    font-weight: 700;
  }

  .text-s {
    font-size: 0.875rem;
    font-weight: 400;
  }

  .text-xs {
    font-size: 0.75rem;
    font-weight: 700;
  }

  .tag {
    font-size: 0.625rem;
    font-weight: 700;
  }

  :focus {
    outline: 0;
    /* box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]}; */
  }

  body {
    /* background: ${(props) => props.theme["gray-900"]}; */
    /* color: ${(props) => props.theme["gray-300"]}; */
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }
`;
