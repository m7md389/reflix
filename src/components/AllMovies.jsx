import React from "react";
import { Link } from "react-router-dom";
import RentButton from "./RentButton";

export default function AllMovies({ movies, onRent }) {
  return (
    <div className="catalog-container">
      <h1>Catalog:</h1>
      <div className="catalog">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <Link to={`/catalog/${movie.id}`}>
              <img className="movie-img" src={movie.img} />
            </Link>

            <RentButton movie={movie} onRent={onRent} />
          </div>
        ))}
      </div>
    </div>
  );
}
