// import { Link } from 'react-router-dom';

import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import {   useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchMovieSearchResult = async () => {
      try {
        setIsLoading(true);
        const searchMovieId = await fetchSearchMovie(query);

        setMovies(searchMovieId);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieSearchResult();
  }, [query]);

  const handleFormSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.searchMovieId.value;
    setSearchParams({ query: searchValue });
  };

  return (
    <div>
      {isLoading && <Loader />}
      <form onSubmit={handleFormSubmit}>
        <label>
          <p>Search movie by Id: </p>
          <input type="text" name="searchMovieId" required />
        </label>
        <button type="submit">Search</button>
      </form>
      <section>
        {error && <p>error.message</p>}
        {movies !== null && <MoviesList movies={movies}></MoviesList>}
      </section>
    </div>
  );
};
export default Movies;
