import React, { Component } from "react";
import API from "../../services/api";
import Spinner from "../../components/Loader/Loader";
import MovieList from "../../components/MoviesList/MovieList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
    isLoading: false,
    error: null,
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.state.query === "") {
      toast.error("Something went wrong", {
        className: "error_toast",
      });
      return;
    }

    try {
      this.setState({ isloading: true });
      if (this.state.query) {
        const response = await API.searchMovies(this.state.query);
        this.props.history.push({
          pathname: this.props.history.location.pathname,
          search: this.state.query,
          key: this.props.history.location.key,
        });
        this.setState({ movies: response.data.results });
      }
    } catch (error) {
      this.setState({
        error: toast.error("Something went wrong", {
          className: "error_toast",
        }),
      });
    } finally {
      this.setState({ isloading: true });
    }
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
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
