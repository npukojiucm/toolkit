import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";

function NavBar() {
  const [eventKey, setEventKey] = useState(null);
  const url = useLocation();

  useEffect(() => {
    setEventKey(url.pathname)


    if (url.pathname.split("/")[1] === "film") setEventKey("/search")
  }, [eventKey]);

  return (
    <Nav variant="pills" className="mb-4"  activeKey={eventKey}>
      <Nav.Item>
        <Nav.Link eventKey="/" href="/">
          Главная
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={"/search" || "/film/:id"} href="/search">
          Поиск
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/favourites" href="/favourites">
          Избранное
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
