import {
    ListGroupItem,
    Image,
    ListGroup,
    Stack,
  } from "react-bootstrap";

  import FavouriteBtn from "../FavouriteBtn/FavouriteBtn"


export default function ListItem({ film }) {
    return (
        <ListGroupItem
        href={`/film/${film.imdbID}`}
        as="a"
      >
        <ListGroup horizontal className="mb-3">
          <ListGroupItem className="border-start-0 border-end-0 rounded-0">
            <Image src={film.Poster} alt={film.Title} style={{ width: 100 }} />
          </ListGroupItem>

          <ListGroupItem className="w-100 border-start-0 border-end-0 rounded-0">
            <div className="d-flex align-items-baseline">
              <h2 className="me-3">{film.Title}</h2>
              
              <FavouriteBtn film={film} />
            </div>

            <Stack gap={2}>
              <span className="year">Year: {film.Year}</span>
              <span className="type">Type: {film.Type}</span>
            </Stack>
          </ListGroupItem>
        </ListGroup>
      </ListGroupItem>
    )
}
