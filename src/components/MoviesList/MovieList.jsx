import { NavLink, withRouter } from "react-router-dom";
import errorImg from "../../images/error.jpg";

const imgUrl = `https://image.tmdb.org/t/p/w500/`;
function MovieList({ movies, location }) {
  return (
    <ul className="movie__list">
      {movies.map(({ id, poster_path, original_title, title }) => (
        <li key={id} className="movie__item">
          <NavLink
            to={{
              pathname: `movies/${id}`,
              state: { from: location },
            }}
            className="nav_p"
          >
            <img
              src={poster_path === null ? errorImg : `${imgUrl}${poster_path}`}
              alt={original_title}
            />
            <p className="movie__title">
              {original_title ? original_title : title}
            </p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
export default withRouter(MovieList);
