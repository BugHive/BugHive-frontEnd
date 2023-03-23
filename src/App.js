import { ThemeProvider } from "styled-components";
import SignUp from "./pages/SignUp";
import { darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <SignUp/>
    </ThemeProvider>
  );
}

export default App;
