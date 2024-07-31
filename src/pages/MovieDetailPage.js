// src/pages/MovieDetailPage.js
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../api/api.js';
import BackButton from '../components/BackButton'; // Adjust the path as needed
import ForwardButton from '../components/ForwardButton'; // Adjust the path as needed
import "./MovieDetailPage.css";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieDetails(id)
      .then(response => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        // Handle error here if necessary
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>No movie details available.</div>;
  }

  return (
    <div className="movie-detail-page">
      <div className="navigation-buttons">
        <BackButton />
        <ForwardButton />
      </div>
      <div className="movie-detail-container">
        <img 
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-detail">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-overview">{movie.overview}</p>
          <div className="movie-info">
            <p>Ticket Price: $19 </p>
            <Link to={`/select-seats/${id}`}>
              <button className="select-seats-button">Select Seats</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
