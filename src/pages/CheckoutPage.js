import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import './CheckoutPage.css'; // Import the CSS file
import BackButton from '../components/BackButton'; // Import BackButton
import ForwardButton from '../components/ForwardButton'; // Import ForwardButton

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate(); // Use navigate for redirection
  const { selectedSeats, movie } = state || {};
  const ticketPrice = 19; // Fixed ticket price per seat
  const totalPrice = ticketPrice * (selectedSeats ? selectedSeats.length : 0);

  const handlePayment = () => {
    // Mock payment handler function (update as needed)
    alert(`Payment successful! Total Price: $${totalPrice}`);
    navigate('/ticket-confirmation', { state: { selectedSeats, movie } }); // Redirect to the ticket confirmation page
  };

  return (
    <div className="checkout-page">
      <div className="navigation-buttons">
        <BackButton />
        <ForwardButton />
      </div>
      <div className="checkout-container">
      <div className="checkout-con">
        <h1 className="checkout-title">Checkout</h1>
        <div className="movie-details">
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
          )}
          <h2 className="movie-title">{movie.title}</h2>
        </div>
        <div className="checkout-details">
          <p><strong>Number of Seats:</strong> {selectedSeats.length}</p>
          <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>
        </div>
        </div>
        <div className="payment-form">
          <h3>Payment Details</h3>
          <form>
            <label htmlFor="card-number">Card Number:</label>
            <input type="text" id="card-number" placeholder="**** **** **** ****" />
            
            <label htmlFor="expiry-date">Expiry Date:</label>
            <input type="text" id="expiry-date" placeholder="MM/YY" />
            
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" placeholder="***" />
          </form>
          <button className="pay-now-button" onClick={handlePayment}>Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
