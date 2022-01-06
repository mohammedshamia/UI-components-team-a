import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/homePage";
import MainLayout from './Layout/MainLayout/mainLayout'
import Header from "./Components/Header/Header";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components/*" element={<MainLayout />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      </>
  );
}

export default App;