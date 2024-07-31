
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
