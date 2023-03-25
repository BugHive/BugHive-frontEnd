
import { ThemeProvider } from "styled-components";
import Verification from "./pages/Verification";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Verification/>
    </ThemeProvider>
  );
}

export default App;
