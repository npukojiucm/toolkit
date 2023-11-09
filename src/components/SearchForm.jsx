import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { useDispatch, useSelector } from "react-redux";
import { setString, clearString } from "../redux/slices/searchString";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchString } = useSelector((state) => state.searchString);

  const inputTextSearchHandler = (e) => {
    const { value } = e.target;

    if (value === "") {
      return dispatch(clearString(""));
    }

    return dispatch(setString(value));
  };

  const clickButtonSearch = (e) => {
    e.preventDefault();

    return navigate(`/search?q=${searchString}`);
  };

  return (
    <Form className="position-realative mb-5">
      <Stack direction="horizontal" gap={2} style={{ height: 50 }}>
        <Form.Group className="w-75 h-100 position-relative">
          <Form.Control
            className={"h-100"}
            placeholder="Add your item here..."
            onChange={inputTextSearchHandler}
          />
        </Form.Group>

        <Button
          className="w-25 h-100"
          type="submit"
          variant="secondary"
          onClick={clickButtonSearch}
        >
          Search
        </Button>
      </Stack>
    </Form>
  );
}

export default SearchForm;
