import React, { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.query === "") {
      toast.error("Please enter your query");
      return;
    }

    this.props.onSubmit(this.state.query);
    this.reset();
  };
  reset = () => {
    this.setState({ query: "" });
  };

  render() {
    const { query } = this.state;
    return (
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
    );
  }
}

export default Searchbar;
Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
