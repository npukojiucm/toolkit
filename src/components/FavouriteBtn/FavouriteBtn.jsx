import "./FavouriteBtn.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { delFavourite, addFavourite } from "../../redux/slices/favouriteSlice";

export default function FavouriteButton({ film }) {
  const dispatch = useDispatch();

  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const local = localStorage.getItem("favourite"),
      films = JSON.parse(local);

    if (films && film.imdbID in films) {
      setIsFavourite(true);
    }
  }, []);

  const clickHandler = (e, isFavourite, film) => {
    e.preventDefault();

    // const { target } = e;

    if (isFavourite) {
      dispatch(delFavourite(film.imdbID));
      setIsFavourite(false);
    } else {
      dispatch(addFavourite(film));
      setIsFavourite(true);
    }
  };

  return (
    <button
      className={`position-absolute favourite ${isFavourite && "active"}`}
      onClick={(e) => clickHandler(e, isFavourite, film)}
    >
      Favourite
    </button>
  );
}
