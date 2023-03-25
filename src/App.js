
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/theme";
import Forgot from "./pages/Forgot";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Forgot/>
    </ThemeProvider>
  );
}

export default App;
