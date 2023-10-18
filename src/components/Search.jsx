import { useDispatch, useSelector } from "react-redux";
import SearchResultList from "./SearchResultList.jsx";
import { fetchFilms } from "../redux/slices/seacrhSlice.js";

function Search() {
  const dispatch = useDispatch();
  const { listFilms } = useSelector(state => state.search)

  const searchActionHandler = (e) => {
    e.preventDefault();

    const form = document.forms.searchForm,
      searchString = form.elements[0].value;

      dispatch(fetchFilms(searchString))
    
  };
  return (
    <div className="search-widget">
      <form name="searchForm" className="search-form">
        <input type="text" className="search-text" />

        <button className="search-button" onClick={searchActionHandler}>
          Найти
        </button>
      </form>

      <SearchResultList listFilms={listFilms}/>
    </div>
  );
}

export default Search;
