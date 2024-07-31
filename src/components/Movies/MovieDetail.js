// src/components/Movies/MovieDetail.js

import PropTypes from 'prop-types';
// import './MovieDetail.css';

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
    </div>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
  }).isRequired,
};

export default MovieDetail;
