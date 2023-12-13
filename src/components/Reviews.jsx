import { useParams } from 'react-router-dom';
import { getReviewsData } from 'api';
import { useEffect, useState } from 'react';
import { Loader } from './Loader/Loader';

export default function Reviews() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setItems] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const reviews = await getReviewsData(movieId);
        setIsLoading(true);
        setItems(reviews);
      } catch (error) {
        setError(true);
        console.log('Something wrong...');
      } finally {
        setIsLoading(false);
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <>
      <ul>
        {data.map(({ author, content, id }) => (
          <li key={id}>
            <h2>Author: {author}</h2>
            <p>{content}</p>
          </li>
        ))}
      </ul>
      {isLoading && <Loader></Loader>}
      {error && <p>Something wrong...</p>}
    </>
  );
}
