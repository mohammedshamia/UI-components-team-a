import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AvatarPage from "./Pages/AvatarPage";
import CardPage from "./Pages/CardPage";
import DialogPage from "./Pages/DialogPage";
import NotFoundPage from "./Pages/NotFoundPage";
import SkeletonPage from "./Pages/SkeletonPage";
import TypographyPage from "./Pages/TypographyPage";
import MainLayout from './Layout/MainLayout/mainLayout'
function App() {
  return (
    <>
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components/avatar" element={<AvatarPage />} />
        <Route path="/components/dialog" element={<DialogPage />} />
        <Route path="/components/card" element={<CardPage />} />
        <Route path="/components/skeleton" element={<SkeletonPage />} />
        <Route path="/components/typography" element={<TypographyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </MainLayout>
      </>
  );
}

export default App;