
import { ThemeProvider } from "styled-components";
import Start from './pages/Start'
import { GlobalStyle } from "./styles/global";
import { lightTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Start/>
    </ThemeProvider>
  );
}

export default App;
