import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/theme";
import ViewProvider from "./context/ViewContext";
import Router from "./router";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AuthContextProvider>
        <GlobalStyle />
        <ViewProvider>
          <Router />
        </ViewProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
