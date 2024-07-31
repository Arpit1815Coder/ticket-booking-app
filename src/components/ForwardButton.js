// src/components/ForwardButton.js

import { useNavigate } from 'react-router-dom';
import './Button.css'; // Optional: add common styles

const ForwardButton = () => {
  const navigate = useNavigate();

  const handleForward = () => {
    navigate(1); // Navigate forward to the next page
  };

  return (
    <button className="nav-button forward-button" onClick={handleForward}>
      Forward <i className="fas fa-chevron-right"></i>
    </button>
  );
};

export default ForwardButton;
