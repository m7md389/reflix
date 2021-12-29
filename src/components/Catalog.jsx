import React, { Component } from "react";
import "../styles/catalog.css";
import AllMovies from "./AllMovies";
import RentedMovies from "./RentedMovies";

export default class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      movies: [...props.movies],
    };
  }

  handleInput = (event) => {
    this.setState({ searchInput: event.target.value }, () => {
      let movies = [...this.props.movies];
      const { searchInput } = this.state;

      if (searchInput.replace(/ /g, "").length == 0) {
        this.setState({ movies: this.props.movies });
        return null;
      }

      movies = movies.filter((m) =>
        m.title.toLowerCase().startsWith(searchInput)
      );

      this.setState({ movies });
    });
  };

  render() {
    return (
      <div className="catalog-page">
        <input
          type="text"
          onChange={(event) => this.handleInput(event)}
          value={this.state.searchInput}
        />
        <RentedMovies movies={this.state.movies} onRent={this.props.onRent} />
        <AllMovies movies={this.state.movies} onRent={this.props.onRent} />
      </div>
    );
  }
}
