import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Routes from "./Routes";
import themes from "./styles/themes";
import GlobalStyle from "./styles/global";
ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
