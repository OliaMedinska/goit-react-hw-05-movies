import { Outlet, useParams } from 'react-router-dom';
import { getReviewsData } from 'api';
import { useEffect, useState } from 'react';

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
        console.log(reviews);
      } catch (error) {
        setError(true);
        console.log('Something wrong...');
      } finally {
        setIsLoading(false);
      }
    }

    getReviews();
  }, []);

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
      {isLoading}
      {error}
      <Outlet />
    </>
  );
}
