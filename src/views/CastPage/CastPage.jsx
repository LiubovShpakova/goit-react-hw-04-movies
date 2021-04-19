import { Component } from "react";
import PropTypes from "prop-types";
import API from "../../services/api";
import errorImg from "../../images/error.jpg";
import Spinner from "../../components/Loader/Loader";
const imgUrl = `https://image.tmdb.org/t/p/w500/`;
class CastPage extends Component {
  state = {
    actors: [],
    isLoading: false,
    error: null,
  };
  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const movie_id = this.props.match.params.movieId;
      const response = await API.searchMovieCredits(movie_id);

      this.setState({ actors: response.data.cast });
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  render() {
    const { actors, isLoading } = this.state;
    return (
      <>
        {isLoading && <Spinner />}
        {actors.length === 0 ? (
          <div>
            <p>No Actors</p>
          </div>
        ) : (
          <ul className="movie__list">
            {actors.map((elem) => (
              <li key={elem.id}>
                <img
                  src={
                    elem.profile_path === null
                      ? errorImg
                      : `${imgUrl}${elem.profile_path}`
                  }
                  alt={elem.name}
                />
                <p className="movie__actor">{elem.original_name}</p>
                <p className="movie__character">{elem.character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

CastPage.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string.isRequired,
      original_name: PropTypes.string,
    })
  ),
};

export default CastPage;
