// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TicketConfirmationPage from './pages/TicketConfirmationPage';
import MovieDetailPage from './pages/MovieDetailPage';
import SelectSeatsPage from './pages/SelectSeatsPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/ticket-confirmation" element={<TicketConfirmationPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/select-seats/:id" element={<SelectSeatsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
