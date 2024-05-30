import React, { useState } from 'react';
import { Link, Navigate, useNavigate} from 'react-router-dom';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${search}`);
  };

  return (
    <nav>
      <Link to="/">MOVIES-DB</Link>
      <Link to="/">Home</Link>
      <Link to="/top-rated-movies">Top Rated Movies</Link>
      <Link to="/upcoming-movies">Upcoming Movies</Link>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
