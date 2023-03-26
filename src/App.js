
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/theme";
import Layout from "./components/Layout";
import SavedBugs from './pages/SavedBugs/index'
import AllEntries from './pages/AllEntries'
import Popular from './pages/Popular'
import Recently from './pages/Recently'
import ViewProvider from "./context/ViewContext";
// import NewPassword from "./pages/NewPassword";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      {/* <NewPassword/> */}
      <ViewProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<SavedBugs/>}>
              <Route index  element={<AllEntries/>}/>
              <Route path="/popular" element={<Popular/>}/>
              <Route path="/recently" element={<Recently/>}/>
          </Route>
        </Routes>
      </Layout>
    </ViewProvider>
    </ThemeProvider>
  );
}

export default App;
