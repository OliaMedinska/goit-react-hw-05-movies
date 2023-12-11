import { NavLink, Outlet, useParams, Link } from 'react-router-dom';
import { getMoviesDetails } from 'api';
import { useEffect, useState } from 'react';

export default function MoviesDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setItems] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function updatedMovies() {
      try {
        const movies = await getMoviesDetails(movieId);
        setIsLoading(true);
        setItems(movies);
      } catch (error) {
        setError(true);
        console.log('Something wrong...');
      } finally {
        setIsLoading(false);
      }
    }

    updatedMovies();
  }, []);

  return (
    <>
      <Link to="">
        <svg></svg>Go back
      </Link>
      <div>
        <img
          src={`https://www.themoviedb.org/t/p/w1280${data.poster_path}`}
          alt=""
        />
        <div>
          <h1>{data.title || data.name}</h1>
          <p>User score: {data.popularity}%</p>
          <h2>Overview</h2>
          <p>{data.overview}</p>
          {data?.genres?.length > 0 && (
            <>
              <h2>Genres</h2>
              <ul>
                {data.genres.map(({ name, id }) => (
                  <li key={id}>
                    <p>{name}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
