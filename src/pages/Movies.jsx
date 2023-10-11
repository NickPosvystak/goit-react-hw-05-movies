// import { Link } from 'react-router-dom';

export const Movies = () => {
  // useEffect(() =>{
  // HTTP request
  // },[])
  return (
    <div>
      <button type="button">Go back</button>
      <div>
        <img src="https://via.placeholder.com/200x100" alt="" />
        <h1>Name of movie:</h1>
        <p>Overview:</p>
        <p>Genres:</p> 
      </div>

      {/* <p>Collection og dogs🐕🐕🐕</p>
      {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5', 'dog-6', 'dog-7'].map(
        dog => {
          return (
            <Link key={dog} to={`${dog}`}>
              {dog}
            </Link>
          );
        }
      )} */}
    </div>
  );
};
