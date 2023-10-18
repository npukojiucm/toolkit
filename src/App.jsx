import { NavLink, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import CardFilmPage from "./Pages/CardFilmPage";
import FavourotePage from "./Pages/FavouritePage";

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <NavLink to={"/"} className={"nav-link"}>
          Главная
        </NavLink>

        <NavLink to={"/favourites"} className={"nav-link"}>
          Избранное
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Search />} />

        <Route path="/film/:id" element={<CardFilmPage />} />
        <Route path="/favourites" element={<FavourotePage />} />
      </Routes>
    </div>
  );
}

export default App;
