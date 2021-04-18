import React, { Component } from "react";
import API from "../../services/api";
import Spinner from "../../components/Loader/Loader";
import MovieList from "../../components/MoviesList/MovieList";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
    isLoading: false,
    error: "",
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      if (this.props.location.search) {
        const response = await API.searchMovies(this.props.location.search);
        // console.log(response);
        this.setState({ movies: response.data.results });
        console.log(response.data.results);
      }
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ loading: true });
    }
  }

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.query === "") {
      return;
    }
    // console.log(this.props.history.location);
    this.props.history.push({
      pathname: this.props.history.location.pathname,
      search: this.state.query,
      key: this.props.history.location.key,
    });
    // console.log(this.props.history.location);
    this.reset();
  };
  reset = () => {
    this.setState({ query: "" });
  };

  render() {
    const { query, movies, isLoading } = this.state;
    return (
      <>
        <div>
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
              value={query}
              onChange={this.handleChange}
            />
          </form>
        </div>
        {isLoading && <Spinner />}
        {movies.length !== 0 && <MovieList movies={movies} />}
      </>
    );
  }
}
