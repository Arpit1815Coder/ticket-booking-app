import axios from 'axios';

// Set the base URL for all API requests
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// Replace with your actual TMDb API key
const API_KEY = '2a1a8e3913d4f6e8cf087193238ffab5';

// Function to fetch popular movies
export const fetchMovies = () => axios.get('/movie/popular', {
  params: { api_key: API_KEY }
});

// Function to fetch movie details
export const fetchMovieDetails = (id) => axios.get(`/movie/${id}`, {
  params: { api_key: API_KEY }
});

// Function to fetch genres
export const fetchGenres = async () => {
  try {
    const response = await axios.get('/genre/movie/list', {
      params: {
        api_key: API_KEY,
        language: 'en-US' // Adjust language as needed
      }
    });
    return response.data; // Return the full response data
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
};

// api.js



export const fetchMoviesByGenre = async (searchTerm, genreId) => {
  const params = {
    api_key: '2a1a8e3913d4f6e8cf087193238ffab5',
    query: searchTerm || '',
    with_genres: genreId || '',
  };

  const url = searchTerm
    ? `https://api.themoviedb.org/3/search/movie`
    : `https://api.themoviedb.org/3/discover/movie`;

  const response = await axios.get(url, { params });
  return response;
};



// Mock functions for seat-related actions
// Replace these with your actual API endpoints if you have a backend

export const fetchSeats = () => {
  // Mock data for seats
  return new Promise((resolve) => {
    const seats = Array(60).fill().map((_, index) => ({
      booked: false,
      id: index + 1,
    }));
    resolve({ data: seats });
  });
};

export const bookSeats = (seats) => { // Removed movieId from parameters
  // Mock function to book seats
  return new Promise((resolve) => {
    console.log('Booking seats:', seats);
    resolve({ data: { success: true } });
  });
};
