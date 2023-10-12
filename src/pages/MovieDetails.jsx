import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getMovieDetails = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.log('setError: ', setError(error.message));
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      <button type="button">Go back</button>
      {error && <p>error.message</p>}
      <div>
        <img src="" alt="" />
        <h1>MovieDetails:{movieId}</h1>
        <h1>Name of movie: </h1>
        <p>Overview:</p>
        <p>Genres:</p>
      </div>
      <div>
        <ul>
          <li>
            <Link to="cast">Cast😎</Link>
          </li>
          <li>
            <Link to="review">Review😋</Link>
          </li>
        </ul>
      </div>
      {/* <Outlet /> */}
    </>
  );
};