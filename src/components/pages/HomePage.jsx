import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
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

export default HomePage;
