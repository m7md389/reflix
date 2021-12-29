import React from "react";

export default function RentButton({ movie, onRent }) {
  return (
    <button
      className="rent-button"
      onClick={() => onRent(movie.id, !movie.isRented)}
    >
      {movie.isRented ? "unrent" : "rent"}
    </button>
  );
}
