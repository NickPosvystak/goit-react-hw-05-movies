// import { MovieItem } from "./MovieItem";

import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  //   Check if 'movies' is an array and has elements
  if (!Array.isArray(movies)) {
    return <p>No movies to display.</p>;
  }
  return (
    
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    //   {/* <Outlet /> */}
    
  );
};
