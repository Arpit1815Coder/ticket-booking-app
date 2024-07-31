import  { useContext } from 'react';
import { BookingContext } from '../../contexts/BookingContext.js';
import PropTypes from 'prop-types';
import axios from 'axios'; // Add this import
// import './Checkout.css';

const Checkout = ({ movieId }) => {
  const { selectedSeats, clearSeats } = useContext(BookingContext);

  const handlePayment = async () => {
    try {
      // Implement Razorpay payment integration here
      const response = await axios.post('/api/payment', {
        movieId,
        seats: selectedSeats,
      });

      if (response.status === 200) {
        alert('Payment successful');
        clearSeats();
      } else {
        alert('Payment failed');
      }
    } catch (error) {
      console.error('Error during payment:', error);
      alert('Payment failed');
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="selected-seats">
        <h3>Selected Seats</h3>
        <ul>
          {selectedSeats.map((seatId) => (
            <li key={seatId}>{seatId}</li>
          ))}
        </ul>
      </div>
      <button onClick={handlePayment} className="pay-button">
        Pay
      </button>
    </div>
  );
};

Checkout.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Checkout;
