import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'bbb80e56ba11955520e995839df2240b';
axios.defaults.params = {
api_key: KEY,
language: 'en-US'
};


export const searchMovies = async () => {
  const response = await axios.get(`/search/movie?include_adult=false&page=1`);
  return response.data.results;
};
  
export const fetchPopularMovies = async () => {
    const response = await axios.get(`/trending/all/day`);
    return response.data;
  };

  export const getMoviesDetails = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}`);
    return response.data;
  };

  export const getActorsData = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  };

  export const getReviewsData = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  };