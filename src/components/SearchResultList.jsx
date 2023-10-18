import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFavourite, delFavourite } from "../redux/slices/favouriteSlice";

function SearchResultList({ listFilms }) {
  const { listFilms: list } = useSelector((state) => state.search);
  const { favouriteList } = useSelector((state) => state.favourite);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const navigateToCardFilmHandler = (e) => {
    const parent = e.target.closest("li");
    const id = parent.attributes.getNamedItem("data-id").value;

    return navigate(`/film/${id}`);
  };

  const favouriteActionHandler = (e, id) => {
    const className = e.target.classList.contains("favourite")
    console.log(className);

    const film = list.filter(film => film.imdbID === id);
    console.log(film);

    if (className) dispatch(delFavourite(id))
    else dispatch(addFavourite(film[0]))

    

    e.target.classList.toggle("favourite");
  };

  const favouriteButtonClassName = (id) => {
    let favouriteClass = "favourite-action ";

    const index = favouriteList.findIndex((film) => film.imdbID === id);

    if (index !== -1) favouriteClass = favouriteClass + "favourite";

    return favouriteClass;
  };

  const li = (description) => {
    return (
      <li
        className="list-item"
        key={description.imdbID}
        data-id={description.imdbID}
      >
        <div className="item-poster">
          <img
            src={description.Poster}
            alt={description.Title}
            className="poster-img"
          />
        </div>

        <div className="item-content">
          <h3 className="content-title">{description.Title}</h3>
          <div className="item-rating">{description.imdbRating}</div>
          <div className="item-rating__star">★</div>

          <button
            className={favouriteButtonClassName(description.imdbID)}
            onClick={(e) => favouriteActionHandler(e, description.imdbID)}
          data-id={description.imdbID}>
            Избранное
          </button>

          <div className="content-text">
            <p className="content-text__description">{description.Plot}</p>
          </div>

          <div className="content-footer">
            <div className="item-year">{description.Year}</div>
            <div className="item-genre">Жанр: {description.Genre}</div>
            <div className="item-runtime">
              Продолжительность: {description.Runtime}
            </div>
            <div className="item-director">Режисер: {description.Director}</div>
            <div className="item-actors">Актёры: {description.Actors}</div>
          </div>
        </div>
      </li>
    );
  };
  return (
    <ul className="result-list">
      {listFilms.map((film) => {
        return li(film);
      })}
    </ul>
  );
}

SearchResultList.propTypes = {
  listFilms: PropTypes.array,
};

export default SearchResultList;
