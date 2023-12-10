import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org';
  
export const fetchPopularMovies = async () => {
    const response = await axios.get(`/3/trending/all/day?language=en-US`);
    return response;
  };