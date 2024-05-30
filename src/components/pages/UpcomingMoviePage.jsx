// src/pages/UpcomingMoviePage.js
import React, { useEffect, useState } from 'react';
import MovieList from '../MovieList';


const UpcomingMoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, [page]);

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <h1>Upcoming Movies</h1>
      <MovieList movies={movies} />
      <div className="pagination">
        <button onClick={prevPage} disabled={page === 1}>Previous</button>
        <span>Page {page}</span>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default UpcomingMoviePage;
