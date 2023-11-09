import { useSelector } from "react-redux";
import ListItem from "../components/ListItem/ListItem";

export default function FavourotePage() {
  const { favouritesList } = useSelector((state) => state.favourite);
  const storage = localStorage.getItem("favourite"),
    storageFavourite = JSON.parse(storage);

  const content =
    Object.keys(favouritesList).length || storageFavourite || "isNotContent";

  switch (content) {
    case "isNotContent":
      return <>No films...</>;

    default:
      return (
        <>
          {Object.keys(content).map((id) => (
            <ListItem key={id} film={content[id]} />
          ))}
        </>
      );
  }
}
