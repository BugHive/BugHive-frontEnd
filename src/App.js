
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { lightTheme } from "./styles/theme";
import Layout from "./components/Layout";
import SavedBugs from './pages/SavedBugs/index'
import AllEntries from './pages/AllEntries'
import Popular from './pages/Popular'
import Recently from './pages/Recently'
import ViewProvider from "./context/ViewContext";
import AllHistory from './pages/AllHistory'
import UnsavedEntry from "./pages/UnsavedEntry";
// import NewPassword from "./pages/NewPassword";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <ViewProvider>
      <Layout>
        <UnsavedEntry/>
      </Layout>
    </ViewProvider>
    </ThemeProvider>
  );
}

export default App;
