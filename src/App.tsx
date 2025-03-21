import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/themes/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter></BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
