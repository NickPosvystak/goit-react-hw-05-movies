import axios from 'axios';

const API_KEY = '6ab01e7de22f8f583270a7ee53cfe6da';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrending = async () => {
 

    const { data } = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
    
  console.log(data.results);
  return data;
};
