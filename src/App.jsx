import { Routes, Route } from "react-router-dom";
import CardFilmPage from "./Pages/CardFilmPage";
import FavourotePage from "./Pages/FavouritePage";
import SearchResultList from "./Pages/SearchResultPage";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <>
      {" "}
      <NavBar />
      
      <SearchForm />

      <Routes>
        <Route path="/search" element={<SearchResultList />} />
        
        <Route path="/film/:id" element={<CardFilmPage />} />
        
        <Route path="/favourites" element={<FavourotePage />} />
      </Routes>
    </>
  );
}

export default App;
