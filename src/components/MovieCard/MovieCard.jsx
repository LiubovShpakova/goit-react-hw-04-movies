// import PropTypes from "prop-types";

import errorImg from "../../images/error.jpg";

const imgUrl = `https://image.tmdb.org/t/p/w500/`;
const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="movie_img">
        <img
          src={
            movie.poster_path === undefined
              ? errorImg
              : `${imgUrl}${movie.poster_path}`
          }
          alt={movie.title}
          width="320"
        />
        <div className="movie_discription">
          <h2>{movie.original_title ? movie.original_title : movie.title}</h2>
          <div>User Score: {movie.vote_average * 10}%</div>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
          <h3>Genres:</h3>
          <div className="movie_genres">
            {movie.genres.map((elem) => (
              <p key={elem.id} className="movie_genres_item">
                {elem.name}
              </p>
            ))}
          </div>
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
