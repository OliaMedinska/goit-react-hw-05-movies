import { Outlet, useParams } from 'react-router-dom';
import { getMoviesDetails } from 'api';
import { useEffect, useState } from 'react';
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

  return (
    <>
      <Button to="/">Go back</Button>
      <Container>
        <MoviePoster
          src={`https://www.themoviedb.org/t/p/w1280${data.poster_path}`}
          alt=""
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
      {isLoading}
      {error}
      <Outlet />
    </>
  );
}
