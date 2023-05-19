import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/theme";
import ViewProvider from "./context/ViewContext";
import Router from "./router";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <ViewProvider>
        <Router />
      </ViewProvider>
    </ThemeProvider>
  );
}

export default App;
