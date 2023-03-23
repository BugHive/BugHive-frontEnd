
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/theme";
import Start from './pages/Start'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Start/>
    </ThemeProvider>
  );
}

export default App;
