import { Dropdown, Image, Spinner, Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function DropSearchList() {
  const { loading, searchList } = useSelector((state) => state.search);

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

    return searchList.map((film) => {
      return (
        <Dropdown.Item key={film.imdbID} href={`/film/${film.imdbID}`}>
          <Card className="p-1">
            <Row className="w-100">
              <Col className="col-1">
                <Image
                  src={film.Poster}
                  alt={film.Title}
                  style={{ width: 50 }}
                />
              </Col>

              <Col className="col-11">
                <Card className="border-0">
                  <Card.Body className="pb-0">
                    <Card.Title>{film.Title}</Card.Title>

                    <Card.Text>
                      Year: {film.Year}
                      Type: {film.Type}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card>
        </Dropdown.Item>
      );
    });
  };

  return (
    <Dropdown.Menu
      className="position-absolute navbar-nav-scroll"
      style={{ width: 713, top: 50 }}
      show
    >
      {content(loading)}
    </Dropdown.Menu>
  );
}
