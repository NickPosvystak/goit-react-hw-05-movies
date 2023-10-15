import { BASE_POSTER_URL, DEFAULT_POSTER } from 'helpers/Helpers';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';

 const Cast = () => {
  const { movieId } = useParams();
  const [castDetails, setCastDetails] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchCastId = async () => {
      try {
        const detailsCast = await fetchCast(movieId);

        setCastDetails(detailsCast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCastId();
  }, [movieId]);

  // const { name } = castDetails;
  return (
    <>
      {castDetails !== null && (
        <div>
          <h3>Cast:</h3>
          <ul>
            {castDetails.map(castDetail => (
              <li key={castDetail.id}>
                <img
                  src={`${
                    castDetail.profile_path
                      ? BASE_POSTER_URL + castDetail.profile_path
                      : DEFAULT_POSTER
                  }`}
                  alt={castDetail.name}
                  width={150}
                />
                <b>{castDetail.name}</b>
                <p>Character: {castDetail.character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default Cast;