import { Link, withRouter } from "react-router-dom";
import errorImg from "../../images/error.jpg";

const imgUrl = `https://image.tmdb.org/t/p/w500/`;
function MovieList({ movies, location }) {
  return (
    <ul>
      {movies.map(({ id, poster_path, original_title, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `movies/${id}`,
              state: { from: location },
            }}
          >
            <img
              src={poster_path === null ? errorImg : `${imgUrl}${poster_path}`}
              alt={original_title}
            />
            <p>{original_title ? original_title : title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default withRouter(MovieList);
