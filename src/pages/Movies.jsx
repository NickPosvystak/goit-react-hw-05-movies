import { Link } from 'react-router-dom';

export const Movies = () => {
  // useEffect(() =>{
  // HTTP request
  // },[])
  return (
    <div>
      <input type="text" />
      <button type="button">Search</button>

      <p>Collection og dogs🐕🐕🐕</p>
      {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5', 'dog-6', 'dog-7'].map(
        dog => {
          return (
            <Link key={dog} to={`${dog}`}>
              {dog}
            </Link>
          );
        }
      )}
    </div>
  );
};
