import "./App.style.tsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/homePage";
import MainLayout from "./Layout/MainLayout/mainLayout";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Helper/them";
import { Body,GlobalStyles } from "./App.style";

function App() {
  const [theme, setTheme] = useState<string>('light');

  const ToggelTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark')
    }
    else {
      localStorage.setItem('theme', 'light');
      setTheme('light')
    }
  };

  useEffect(() => {
    const themeValue = localStorage.getItem('theme');
    if (themeValue) {
      setTheme(themeValue)
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>  
        <Body>
        <Routes>
          <Route path="/" element={<HomePage ToggelTheme={ToggelTheme} theme={theme}/>} />
          <Route path="/components/*" element={<MainLayout ToggelTheme={ToggelTheme} theme={theme}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes></Body>
      </ThemeProvider>
    </>
  );
}

export default App;
