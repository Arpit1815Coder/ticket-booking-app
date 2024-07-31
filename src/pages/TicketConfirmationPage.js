import { useLocation } from 'react-router-dom';
import './TicketConfirmationPage.css'; // Create this CSS file for styling

const TicketConfirmationPage = () => {
  const { state } = useLocation();
  const { selectedSeats, movie } = state || {};
  const ticketPrice = 19; // Assuming fixed ticket price per seat
  const totalPrice = ticketPrice * (selectedSeats ? selectedSeats.length : 0);

  return (
    <div className="ticket-confirmation-container">
      <h1 className="confirmation-title">Your Ticket</h1>
      <div className="ticket-details">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="ticket-movie-poster"
        />
        <div className="ticket-info">
          <h2 className="ticket-movie-title">{movie.title}</h2>
          <p><strong>Number of Seats:</strong> {selectedSeats.length}</p>
          <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>
          <p><strong>Seats:</strong> {selectedSeats.join(', ')}</p>
         
        </div>
      </div>
    </div>
  );
};

export default TicketConfirmationPage;
