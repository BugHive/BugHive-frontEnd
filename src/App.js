import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme";


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">
      Hello World!
    </div>
    </ThemeProvider>
  );
}

export default App;
