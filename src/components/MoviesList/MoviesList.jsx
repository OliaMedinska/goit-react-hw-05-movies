import { PopularLink, PopularList } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ items }) => {
  const location = useLocation();

  return (
    <PopularList>
      {items.map(({ title, name, id }) => (
        <li key={id}>
          <PopularLink state={{ from: location }} to={`/movies/${id}`}>
            {title || name}
          </PopularLink>
        </li>
      ))}
    </PopularList>
  );
};
