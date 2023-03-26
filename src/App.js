
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
