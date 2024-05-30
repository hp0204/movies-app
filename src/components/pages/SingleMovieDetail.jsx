// src/pages/SingleMovieDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/SingleMovieDetail.css';

const SingleMovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
        .then(response => response.json())
        .then(data => {
          setMovie(data);
          setLoading(false);
        });
      
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
        .then(response => response.json())
        .then(data => {
          setCast(data.cast);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <div 
        className="movie-header" 
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}
      >
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <div className="rating">
            <span>Rating: {movie.vote_average}</span>
          </div>
          <div className="details">
            <span>{movie.runtime} min</span>
            <span>{movie.genres.map(genre => genre.name).join(', ')}</span>
            <span>Release Date: {new Date(movie.release_date).toDateString()}</span>
          </div>
          <div className="overview">
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
      <div className="cast-section">
        <h2>Cast</h2>
        <div className="cast-list">
          {cast.slice(0, 10).map(actor => (
            <div key={actor.cast_id} className="cast-item">
                  <img src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`} alt={actor.name} className="cast-image" />
                  <p>{actor.name}</p>
                  <p>{actor.character}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default SingleMovieDetail;
    
