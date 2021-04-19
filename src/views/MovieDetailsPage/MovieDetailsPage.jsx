import React, { Component, Suspense, lazy } from "react";
import { Route, NavLink } from "react-router-dom";
import API from "../../services/api";
import Spinner from "../../components/Loader/Loader";

import MovieCard from "../../components/MovieCard/MovieCard";
import routes from "../../routes";

const Cast = lazy(() =>
  import("../CastPage/CastPage" /*webpackChunkName: 'cast-page' */)
);
const Reviews = lazy(() =>
  import("../ReviewsPage/ReviewsPage" /* webpackChunkName: "reviews-page" */)
);
class MovieDetailsPage extends Component {
  state = {
    movieId: "",
    movie: [],
    error: null,
    isLoading: false,
  };
  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const movie_id = this.props.match.params.movieId;
      const response = await API.searchMovieDetails(movie_id);

      this.setState({ movie: response.data });
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { movie, isLoading } = this.state;
    return (
      <>
        {isLoading && <Spinner />}
        <button onClick={this.handleGoBack}>Go Back</button>
        {movie.title && (
          <div className="movie__card">
            <MovieCard movie={movie} />
            <hr />
            <h2>Additional information</h2>
            <ul>
              <li>
                <NavLink
                  exact
                  to={{
                    pathname: `${this.props.match.url}/cast`,
                    state: { from: this.props.location.state?.from },
                  }}
                  className="nav__link"
                  activeClassName="nav__active"
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `${this.props.match.url}/reviews`,
                    state: { from: this.props.location.state?.from },
                  }}
                  className="nav__link"
                  activeClassName="nav__active"
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Suspense fallback={<Spinner />}>
              <Route path={routes.cast} component={Cast} />
              <Route path={routes.reviews} component={Reviews} />
            </Suspense>
            <hr />
          </div>
        )}
      </>
    );
  }
}
export default MovieDetailsPage;
