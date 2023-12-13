import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMoviesDetails } from 'api';
import { useEffect, useState, useRef } from 'react';
import { Loader } from 'components/Loader/Loader';
import {
  MoviePoster,
  Container,
  ContentContainer,
  TextContent,
  SecHeader,
  NavList,
  StyledNavlink,
  Button,
} from './MoviesDetailsPage.styled';

export default function MoviesDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setItems] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

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
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const backLink = useRef(location.state?.from ?? '/');

  return (
    <>
      <Button to={backLink.current}>Go back</Button>
      <Container>
        <MoviePoster
          src={
            data.poster_path
              ? `https://www.themoviedb.org/t/p/w1280${data.poster_path}`
              : defaultImg
          }
          alt="poster"
          width={350}
        />
        <ContentContainer>
          <h1>{data.title || data.name}</h1>
          <p>User score: {Number.parseInt(data.popularity)}</p>
          <h2>Overview</h2>
          <TextContent>{data.overview}</TextContent>
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
        </ContentContainer>
      </Container>
      <div>
        <SecHeader>Additional information</SecHeader>
        <nav>
          <NavList>
            <li>
              <StyledNavlink to="cast">Cast</StyledNavlink>
            </li>
            <li>
              <StyledNavlink to="reviews">Reviews</StyledNavlink>
            </li>
          </NavList>
        </nav>
      </div>
      {isLoading && <Loader></Loader>}
      {error && <p>Something wrong...</p>}
      <Outlet />
    </>
  );
}
