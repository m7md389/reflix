import React from "react";

export default function RentedMovies(props) {
  const rentedMovies = props.movies.filter((movie) => movie.isRented);
  if (rentedMovies.length == 0) return null;

  return (
    <div className="rented-container">
      <h1>Rented:</h1>
      <div className="rented">
        {props.movies.map((movie) => {
          if (movie.isRented)
            return (
              <div key={movie.id} className="movie">
                <img className="movie-img" src={movie.img} />
                <button onClick={() => props.handleRent(movie.id, false)}>
                  unrent
                </button>
              </div>
            );
        })}
      </div>
    </div>
  );
}
