import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function CardFilmPage() {
    const params = useParams()
    const { listFilms } = useSelector(state => state.search)

    const film = listFilms.findIndex(film => film.imdbID === params.id)

    return (
        <div className="film-card">
            <div className="card-poster">
                <img src={listFilms[film].Poster   } alt="" className="poster-img"/>
            </div>

            <div className="card-content">
                <h1 className="content-title"></h1>
            </div>
        </div>
    )
}