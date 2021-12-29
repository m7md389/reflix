import React, { Component } from "react";
import "../styles/catalog.css";
import AllMovies from "./AllMovies";
import RentedMovies from "./RentedMovies";

export default class Catalog extends Component {
  constructor(props) {
    super(props);
    this.INITIAL_BUDGET = 10;
    this.state = {
      searchInput: "",
      movies: [...props.movies],
      budget: this.INITIAL_BUDGET,
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

  handleRent = (movieId, isRented) => {
    let budget = this.state.budget;

    if (budget < 3 && isRented) return null;

    this.props.onRent(movieId, isRented);
    if (isRented) budget -= 3;
    else budget += 3;

    this.setState({ budget });
  };

  render() {
    return (
      <div className="catalog-page">
        <input
          type="text"
          onChange={(event) => this.handleInput(event)}
          value={this.state.searchInput}
        />
        <h1 className="buget">Budget: {this.state.budget}</h1>
        <RentedMovies movies={this.state.movies} onRent={this.handleRent} />
        <AllMovies movies={this.state.movies} onRent={this.handleRent} />
      </div>
    );
  }
}
