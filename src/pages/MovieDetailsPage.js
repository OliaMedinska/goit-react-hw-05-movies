import { Routes, Route, NavLink } from "react-router-dom"

export default function MoviesDetailsPage () {
    return (
    <>
    <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/movies/:movieId/cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="/movies/:movieId/review">Reviews</NavLink>
            </li>
          </ul>
        </nav>
    </header>
    <div>MoviesDetailsPage</div>
    
    <Routes>
        <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
        <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
      </Routes>
    </>
    )
};

