import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';
import { MoviesList } from 'components/MoviesList';

export const Home = () => {
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  //   const { movieId } = useParams();

  useEffect(() => {

    const getTrendingMovies = async () => {
      try {
        // setLoading(true)
        const data = await fetchTrending();

        setMovies(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      {error && <p>error.message</p>}
      <h2>Trending today</h2>
          <MoviesList movies={movies}></MoviesList>
    </>
  );
};
