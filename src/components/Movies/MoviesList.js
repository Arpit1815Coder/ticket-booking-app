// src/components/Movies/MoviesList.js

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import './MoviesList.css';

const MoviesList = ({ movies }) => {
  return (
    <div className="movies-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesList;
