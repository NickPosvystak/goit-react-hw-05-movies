import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { StyledH2 } from './Home.styled';

const Home = () => {
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  //   const { movieId } = useParams();

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        // setLoading(true)
        const data = await fetchTrending();

        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      {error && <p>error.message</p>}
      <StyledH2>Trending today</StyledH2>
      <MoviesList movies={movies}></MoviesList>
    </>
  );
};

export default Home;
