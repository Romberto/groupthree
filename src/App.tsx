import { Route, Routes } from "react-router";
import { HomePage } from "./components/pages/HomePage/HomePage.tsx";
import { SearchPage } from "./components/pages/SearchPage/SearchPage.tsx";
import { FavoritesPage } from "./components/pages/FavoritesPage/FavoritesPage.tsx";
import { HistoryPage } from "./components/pages/HistoryPage/HistoryPage.tsx";
import { PATH } from "./utils/constants.ts";

function App() {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<HomePage />} />
      <Route path={PATH.SEARCH} element={<SearchPage />} />
      <Route path={PATH.FAVORITES} element={<FavoritesPage />} />
      <Route path={PATH.HISTORY} element={<HistoryPage />} />
      <Route path={PATH.SIGNIN} />
      <Route path={PATH.SIGNUP} />
    </Routes>
  );
}

export default App;
