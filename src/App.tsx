import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/homePage";
import MainLayout from "./Layout/MainLayout/mainLayout";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import { useState } from "react";
import ContextTheme from "./ContextAPI/themeContext";

function App() {
  let [Dark, setTheme] = useState<boolean>(false);

  let ToggelTheme = () => {
    setTheme(!Dark);
    // console.log(Dark);
  };

  let themeValus = {
    dark: Dark,
    toggelTheme: ToggelTheme,
  };

  return (
    <>
      <ContextTheme.Provider value={themeValus}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components/*" element={<MainLayout />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ContextTheme.Provider>
    </>
  );
}

export default App;
