import { Route, Routes } from "react-router";
import { HomePage } from "./components/pages/HomePage/HomePage.tsx";
import { SearchPage } from "./components/pages/SearchPage/SearchPage.tsx";
import { FavoritesPage } from "./components/pages/FavoritesPage/FavoritesPage.tsx";
import { HistoryPage } from "./components/pages/HistoryPage/HistoryPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/sign-in" />
      <Route path="/sign-up" />
    </Routes>
  );
}

export default App;
