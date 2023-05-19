import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { lightTheme } from "./styles/theme";
import ViewProvider from "./context/ViewContext";
import Router from "./router";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <ViewProvider>
        <Router />
      </ViewProvider>
    </ThemeProvider>
  );
}

export default App;
