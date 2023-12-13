import { useParams } from 'react-router-dom';
import { getActorsData } from 'api';
import { useEffect, useState } from 'react';
import { List, Image } from './Credits.styled';
import { Loader } from 'components/Loader/Loader';

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

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <List>
        {data.map(({ name, id, character, profile_path }) => (
          <li key={id}>
            <Image
              src={
                profile_path
                  ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${profile_path}`
                  : defaultImg
              }
              alt={name}
              width={350}
            />
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </li>
        ))}
      </List>
      {isLoading && <Loader></Loader>}
      {error && <p>Something wrong...</p>}
    </>
  );
}
