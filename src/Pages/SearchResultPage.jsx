import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { fetchFilms } from "../redux/slices/searchByTitleSlice";
import { Spinner } from "react-bootstrap";
import queryString from "query-string";
import ListItem from "../components/ListItem/ListItem";

function SearchResultList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const query = queryString.parse(location.search);
  const { searchList, loading } = useSelector((state) => state.searchByTitle);

  useEffect(() => {
    if (query.q) {
      dispatch(fetchFilms({ searchString: query.q }));
    }
  }, [query.q]);

  const clickHandler = (e) => {
    e.preventDefault();

    const { target } = e;

    if (target.closest("button")) {
      return;
    }

    const a = target.closest("a");
    const id = a.href.split("/");

    return navigate(`/film/${id[id.length - 1]}`);
  };

  const pendingStatus = (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
        className="me-2"
      ></Spinner>
      <span>Loading...</span>
    </div>
  );

  const errorStatus = <div className="error-status">No Result... </div>;

  const content = (status) => {
    if (status === "pending") return pendingStatus;
    else if (status === "error") return errorStatus;

    return searchList.map((film) => (
      <ListItem key={film.imdbID} film={film} clickHandler={clickHandler} />
    ));
  };

  return <>{content(loading)}</>;
}

export default SearchResultList;
