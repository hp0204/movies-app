// src/components/MovieItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  const { id, poster_path, title } = movie;
  return (
    <div className="movie-item">
      <Link to={`/movie/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default MovieItem;
