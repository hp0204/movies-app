import React, { useEffect, useState } from 'react';

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1')
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedPage;
