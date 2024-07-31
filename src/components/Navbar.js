import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchGenres } from '../api/api'; // Adjust the import path as needed
import './Navbar.css';

const Navbar = ({ onSearch, onGenreChange }) => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const { genres } = await fetchGenres(); // Destructure genres directly
        if (genres) {
          setGenres(genres);
        } else {
          console.error('Unexpected API response structure:', genres);
        }
      } catch (error) {
        setError('Error fetching genres.');
        console.error('Error fetching genres:', error);
      }
    };

    loadGenres();
  }, []);

  return (
    <div className="navbar">
      <a href="/" className="navbar-logo navbar-brand">BookMyMovie</a>
      <div className="navbar-container">
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search movies..."
            onChange={(e) => onSearch(e.target.value)} // Call onSearch with the input value
          />
          <button type="button">Search</button>
        </div>
        <div className="navbar-dropdown">
          {error ? (
            <p>{error}</p>
          ) : (
            <select onChange={(e) => onGenreChange(e.target.value)}>
              <option value="">All Genres</option>
              {genres.map(genre => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

export default Navbar;
