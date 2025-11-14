import { useParams, useOutletContext } from "react-router-dom"   // ✅ CHANGE #1
import { Link } from "react-router-dom"                          // ✅ CHANGE #2
import { Outlet } from "react-router-dom"

function DirectorCard() {
    const { id } = useParams()
    const outletContext = useOutletContext()
  const { directors } = outletContext
const director = directors.find(d => String(d.id) === String(id))
    if (!director) {
        return <h2>Director not found.</h2>
    }

    return (
        <div>
        <h2>{director.name}</h2>
        <p>{director.bio}</p>
        <h3>Movies:</h3>
        <ul>
            {director.movies.map((movie) => (
            <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
            ))}
        </ul>
        <Link to={`movies/new`}>Add New Movie</Link>
        <Outlet context={outletContext} />
        </div>
    )
}

export default DirectorCard;
