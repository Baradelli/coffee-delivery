import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";
import { ThemeProvider } from "styled-components";

import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />

      <GlobalStyle />
    </ThemeProvider>
  );
}
