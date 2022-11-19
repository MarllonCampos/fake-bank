import { ThemeProvider } from "styled-components";
import themes, { ThemeType } from "./styles/themes";
import GlobalStyle from "./styles/global";
import AppRoutes from "./Routes";
function App() {
  return (
    <ThemeProvider theme={themes as ThemeType}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
