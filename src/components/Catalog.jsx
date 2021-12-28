import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/catalog.css";
import RentedMovies from "./RentedMovies";

export default class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }

  handleInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="catalog-page">
        <input
          type="text"
          onChange={(event) => this.handleInput(event)}
          value={this.state.inputValue}
        />

        <RentedMovies
          movies={this.props.movies}
          handleRent={this.props.handleRent}
        />

        <div className="catalog-container">
          <h1>Catalog:</h1>
          <div className="catalog">
            {this.props.movies.map((movie) => (
              <div key={movie.id} className="movie">
                <Link to={`/catalog/${movie.id}`}>
                  <img className="movie-img" src={movie.img} />
                </Link>
                <button onClick={() => this.props.handleRent(movie.id, true)}>
                  rent
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
