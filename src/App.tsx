import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/homePage";
import MainLayout from './Layout/MainLayout/mainLayout'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components/*" element={<MainLayout />} />
        <Route path="*" element={<div>page not found 404 </div>} />
      </Routes>
      </>
  );
}

export default App;