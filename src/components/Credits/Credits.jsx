import { Outlet, useParams } from 'react-router-dom';
import { getActorsData } from 'api';
import { useEffect, useState } from 'react';
import { List, Image } from './Credits.styled';

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
      } catch (error) {
        setError(true);
        console.log('Something wrong...');
      } finally {
        setIsLoading(false);
      }
    }

    getCredits();
  }, [movieId]);

  return (
    <>
      <List>
        {data.map(({ name, id, character, profile_path }) => (
          <li key={id}>
            <Image
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${profile_path}`}
              alt={name}
            />
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </li>
        ))}
      </List>
      {isLoading}
      {error}
      <Outlet />
    </>
  );
}
