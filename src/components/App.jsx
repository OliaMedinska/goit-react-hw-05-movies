import { Route, Routes } from 'react-router-dom';
import { Header, StyledNavlink, List } from './App.styled';
import HomePage from 'pages/HomePage';

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
            {/* <li>
              <NavLink to="/movies/:movieId">MovieDetails</NavLink>
            </li> */}
          </List>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={HomePage()} />
        <Route path="/movies" element={<div>Movies</div>} />
        {/* <Route path="/movies/:movieId" element={<div>MovieDetails</div>} /> */}
      </Routes>
    </div>
  );
};
