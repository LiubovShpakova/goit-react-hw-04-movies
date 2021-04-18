// import PropTypes from "prop-types";

import errorImg from "../../images/error.jpg";

const imgUrl = `https://image.tmdb.org/t/p/w500/`;
const MovieCard = ({ movie }) => {
  return (
    <>
      <div>
        <img
          src={
            movie.poster_path === undefined
              ? errorImg
              : `${imgUrl}${movie.poster_path}`
          }
          alt={movie.title}
        />
        <div>
          <h2>{movie.original_title ? movie.original_title : movie.title}</h2>
          <div>User Score: {movie.vote_average * 10}%</div>
          <div>Overview:</div>
          <p>{movie.overview}</p>
          <div>Genres:</div>
          <ul>
            {movie.genres.map((elem) => (
              <li key={elem.id}>{elem.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

// MovieCard.propTypes = {
//   movie: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       poster_path: PropTypes.string,
//       title: PropTypes.string,
//       original_title: PropTypes.string,
//       vote_average: PropTypes.number,
//       overview: PropTypes.number,
//       name: PropTypes.string,
//     })
//   ),
// };
export default MovieCard;
