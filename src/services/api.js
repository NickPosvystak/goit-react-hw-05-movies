import axios from 'axios';

const API_KEY = '6ab01e7de22f8f583270a7ee53cfe6da';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrending = async () => {
  const { data } = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);

  console.log(data.results);
  return data;
};

export const fetchMovieDetails = async movieId => {
  const { dataDetails } = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  console.log('dataDetails: ', dataDetails.results);
  return dataDetails;
};
