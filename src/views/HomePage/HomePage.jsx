import React, { Component } from "react";
import API from "../../services/api";
import Spinner from "../../components/Loader/Loader";
import MovieList from "../../components/MoviesList/MovieList";

export default class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await API.searchTrending();
      console.log(response);
      this.setState({ movies: response.data.results });
      console.log(response.data.results);
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { movies, isLoading, error } = this.state;
    return (
      <>
        {error && <h1>Error, try again later</h1>}

        {isLoading && <Spinner />}
        {movies.length > 0 ? (
          <>
            <h2>Trending Movies</h2>
            <MovieList movies={movies}></MovieList>
          </>
        ) : null}
      </>
    );
  }
}
