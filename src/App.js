
import { ThemeProvider } from "styled-components";
import NewPassword from "./pages/NewPassword";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <NewPassword/>
    </ThemeProvider>
  );
}

export default App;
