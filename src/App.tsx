import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/homePage";
import MainLayout from './Layout/MainLayout/mainLayout'
import Header from "./Components/Header/Header";
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components/*" element={<MainLayout />} />
        <Route path="*" element={<div>page not found 404 </div>} />
      </Routes>
      </>
  );
}

export default App;