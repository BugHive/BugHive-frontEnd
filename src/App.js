import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { darkTheme, lightTheme } from "./styles/theme";
import ViewProvider from "./context/ViewContext";
import Router from "./router";
import { AuthContextProvider } from "./context/AuthContext";
import React, { useState, useEffect } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const themeConfig = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeConfig}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <AuthContextProvider>
          <GlobalStyle />
          <ViewProvider>
            <Router />
          </ViewProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
