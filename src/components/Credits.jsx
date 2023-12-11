import { Outlet, useParams } from 'react-router-dom';
import { getActorsData } from 'api';
import { useEffect, useState } from 'react';

export default function Credits() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setItems] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCredits() {
      try {
        const actors = await getActorsData(movieId);
        setIsLoading(true);
        setItems(actors);
        console.log(actors);
      } catch (error) {
        setError(true);
        console.log('Something wrong...');
      } finally {
        setIsLoading(false);
      }
    }

    getCredits();
  }, []);

  return (
    <>
      <ul>
        {data.map(({ name, id, character, profile_path }) => (
          <li key={id}>
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${profile_path}`}
              alt={name}
            />
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
