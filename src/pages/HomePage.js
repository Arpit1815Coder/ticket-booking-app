import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { fetchMoviesByGenre } from '../api/api';
import Navbar from '../components/Navbar';
import './HomePage.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const fetchMovies = useCallback(() => {
    fetchMoviesByGenre(searchTerm, selectedGenre)
      .then(response => setMovies(response.data.results))
      .catch(error => console.error('Error fetching movies:', error));
  }, [searchTerm, selectedGenre]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleGenreChange = (genreId) => {
    setSelectedGenre(genreId);
  };

  return (
    <div className="homepage-container">
      <Navbar onSearch={handleSearch} onGenreChange={handleGenreChange} />
      {/* <h1 className="homepage-title">Top Movies</h1> */}
      <div className="movies-grid">
        {movies.length === 0 ? (
          <p>No movies found</p>
        ) : (
          movies.map(movie => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="movie-link"
            >
              <div className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
                <div className="movie-title">{movie.title}</div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
