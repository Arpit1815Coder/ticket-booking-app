// src/components/BackButton.js

import { useNavigate } from 'react-router-dom';
import './Button.css'; // Optional: add common styles

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <button className="nav-button back-button" onClick={handleBack}>
      <i className="fas fa-chevron-left"></i> Back
    </button>
  );
};

export default BackButton;
