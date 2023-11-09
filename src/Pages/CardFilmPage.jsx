import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Image, Stack, Badge } from "react-bootstrap";
import FavouriteButton from "../components/FavouriteBtn/FavouriteBtn";

export default function CardFilmPage() {
  const params = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const fetchById = async (idFilm) => {
      try {
        const res = await fetch(import.meta.env.VITE_API_URL + "i=" + idFilm);
        const data = await res.json();
        setFilm(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchById(params.id);
  }, []);

  return (
    <>
      {film !== null && (
        <Container className="p-0 mt-5">
          <Row className="p-0 mb-5">
            <Col md={4} lg={4} xl={4}>
              <Image src={film.Poster} />
            </Col>
            <Col md={4} lg={8} xl={8}>
              <Stack gap={4} className="position-relative">
                <h1>{film.Title}</h1>

                <div>Rating: {film.Ratings[0].Value}</div>
                <FavouriteButton film={film} />

                <div>Released: {film.Released}</div>

                <div>Year: {film.Year}</div>
                <div>Runtime: {film.Runtime}</div>
                <div>Actors: {film.Actors}</div>
                <div>Language: {film.Language}</div>
                <div>Country: {film.Country}</div>

                <div>
                  Genre:{" "}
                  {film.Genre.split(",").map((genre) => (
                    <Badge key={genre} className="me-3" bg="light" text="dark">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="lh-lg">{film.Plot}</p>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
