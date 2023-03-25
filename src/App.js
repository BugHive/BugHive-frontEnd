
import { ThemeProvider } from "styled-components";
import SignUp from './pages/SignUp'
import { GlobalStyle } from "./styles/global";
import { lightTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <SignUp/>
    </ThemeProvider>
  );
}

export default App;
