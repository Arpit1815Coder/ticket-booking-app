import { useContext, useState, useEffect } from 'react';
import { BookingContext } from '../../contexts/BookingContext.js';
import axios from 'axios';
import PropTypes from 'prop-types';
// import './SelectSeats.css';

const SelectSeats = ({ movieId }) => {
  const { selectedSeats, setSelectedSeats } = useContext(BookingContext);
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    // Fetch seats data from the server
    const fetchSeats = async () => {
      try {
        const response = await axios.get(`/api/movies/${movieId}/seats`);
        setSeats(response.data);
      } catch (error) {
        console.error('Error fetching seats:', error);
      }
    };

    fetchSeats();
  }, [movieId]);

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <div className="select-seats-container">
      <h2>Select Your Seats</h2>
      <div className="seats-grid">
        {seats.map((seat) => (
          <button
            key={seat.id}
            className={`seat ${selectedSeats.includes(seat.id) ? 'selected' : ''} ${seat.booked ? 'booked' : ''}`}
            onClick={() => !seat.booked && handleSeatClick(seat.id)}
            disabled={seat.booked}
          >
            {seat.number}
          </button>
        ))}
      </div>
    </div>
  );
};

SelectSeats.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default SelectSeats;
