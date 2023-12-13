import { Route, Routes } from 'react-router-dom';
import { Header, StyledNavlink, List } from './App.styled';
import { Loader } from 'components/Loader/Loader';
import { lazy, Suspense } from 'react';
const HomePage = lazy(() => import('pages/HomePage/HomePage.js'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage.js'));
const MoviesDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage.jsx')
);
const Credits = lazy(() => import('components/Credits/Credits.jsx'));
const Reviews = lazy(() => import('components/Reviews.jsx'));

export const App = () => {
  return (
    <div>
      <Header>
        <nav>
          <List>
            <li>
              <StyledNavlink to="/">Home</StyledNavlink>
            </li>
            <li>
              <StyledNavlink to="/movies">Movies</StyledNavlink>
            </li>
          </List>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Credits />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element="not found" />
        </Routes>
      </Suspense>
    </div>
  );
};
