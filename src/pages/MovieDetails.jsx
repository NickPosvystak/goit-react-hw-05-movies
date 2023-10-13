import { BASE_POSTER_URL } from 'helpers/Helpers';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getMovieDetails = async () => {
      try {
        const details = await fetchMovieDetails(movieId);

        setMovieDetails(details.data);
      } catch (error) {
        console.log('setError: ', setError(error.message));
      }
    };
    getMovieDetails();
  }, [movieId]);

  // const { poster_path, title, overview, genres } = movieDetails;
  return (
    <>
      <button type="button">Go back</button>
      {error && <p>error.message</p>}
      {movieDetails !== null && (
        <>
          <div>
            <img
              src={`${BASE_POSTER_URL + movieDetails.poster_path}`}
              alt={movieDetails.title}
              width="300"
            />
            <h1>MovieDetails:{movieId}</h1>

            <h1>Name of movie: {movieDetails.title}</h1>
            <p>Users Score: {Math.round(movieDetails.vote_average * 10)}%</p>
            <p>Overview: {movieDetails.overview}</p>
            <p>
              Genres:{movieDetails.genres.map(genre => genre.name).join(',')}
            </p>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast😎</Link>
              </li>
              <li>
                <Link to="review">Review😋</Link>
              </li>
            </ul>
          </div>

          <Outlet />
        </>
      )}
    </>
  );
};
