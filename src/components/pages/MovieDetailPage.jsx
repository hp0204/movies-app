import React, { useEffect, useState } from 'react';

const MovieDetailPage = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
      const movieData = await movieResponse.json();
      setMovie(movieData);

      const castResponse = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
      const castData = await castResponse.json();
      setCast(castData.cast);
    };

    fetchMovieDetails();
  }, [match.params.id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <h2>Cast</h2>
      <ul>
        {cast.map(member => (
          <li key={member.cast_id}>{member.name} as {member.character}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetailPage;
