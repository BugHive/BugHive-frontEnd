import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <div>Hello World!</div>
    </ThemeProvider>
  );
}

export default App;
