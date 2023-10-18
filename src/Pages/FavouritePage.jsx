import { useSelector } from "react-redux"

export default function FavourotePage() {
    const { favouriteList } = useSelector(state => state.favourite)
    return (
        <div>
            {JSON.parse(localStorage.getItem("favourite")).map(f => f.imdbID)}
        </div>
    )
}