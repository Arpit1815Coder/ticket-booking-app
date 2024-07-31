// src/pages/SelectSeatsPage.js
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchSeats, bookSeats, fetchMovieDetails } from '../api/api.js';
import BackButton from '../components/BackButton'; // Import BackButton
import ForwardButton from '../components/ForwardButton'; // Import ForwardButton
import './SelectSeatsPage.css';

const SelectSeatsPage = () => {
  const { id } = useParams();
  const [seats, setSeats] = useState(Array(95).fill({ booked: false }));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSeats(id)
      .then(response => setSeats(response.data))
      .catch(error => console.error('Error fetching seats:', error));

    fetchMovieDetails(id)
      .then(response => setMovie(response.data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [id]);

  const handleSeatSelect = (seatIndex) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatIndex)
        ? prevSelectedSeats.filter((s) => s !== seatIndex)
        : [...prevSelectedSeats, seatIndex]
    );
  };

  const handleCheckout = () => {
    bookSeats(selectedSeats)
      .then(() => navigate('/Checkout', { state: { selectedSeats, movie } }))
      .catch(error => console.error('Error booking seats:', error));
  };

  return (
    <div className="select-seats-page">
      <div className="navigation-buttons">
        <BackButton />
        <ForwardButton />
      </div>
      <div className="select-seats-container">
        <div className="movie-details">
          {movie && (
            <>
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h1 className="movie-title">{movie.title}</h1>
            </>
          )}
          <button className="proceed-button" onClick={handleCheckout} disabled={selectedSeats.length === 0}>
            Proceed to Checkout
          </button>
        </div>
        <div className="seats-checkout">
          <div className="seats-section">
            <div className="seats-grid seats-grid-60">
              {seats.slice(0, 60).map((seat, index) => (
                <button
                  key={index}
                  className={`seat ${selectedSeats.includes(index) ? 'selected' : ''}`}
                  onClick={() => handleSeatSelect(index)}
                  disabled={seat.booked}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="seats-grid seats-grid-30">
              {seats.slice(0, 30).map((seat, index) => (
                <button
                  key={60 + index}
                  className={`seat ${selectedSeats.includes(60 + index) ? 'selected' : ''}`}
                  onClick={() => handleSeatSelect(60 + index)}
                  disabled={seat.booked}
                >
                  {60 + index + 1}
                </button>
              ))}
            </div>
            <img
              className="curved-line"
              src='/curved-line-clipart-xl.png'
              alt="curved line"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSeatsPage;
