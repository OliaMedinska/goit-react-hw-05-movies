import { Route, Routes } from 'react-router-dom';
import { Header, StyledNavlink, List } from './App.styled';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MoviesDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import Credits from '../Credits/Credits';
import Reviews from '../Reviews';

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<Credits />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
