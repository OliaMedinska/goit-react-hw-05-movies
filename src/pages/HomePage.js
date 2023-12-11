import { fetchPopularMovies } from "api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage () {
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(false);
const [items, setItems] = useState([]);

useEffect(() => {
  async function updatedMovies() {
    try {
      const movies = await fetchPopularMovies();
      setIsLoading(true);
      setItems(movies.results);
    } catch (error) {
      setError(true);
      console.log('Something wrong...');
    } finally {
      setIsLoading(false);
    }
  }

  updatedMovies();
}, [])


    return (
     <>
    {items.length > 0 && <h1>Trending today</h1>}
    <ul>
        {items.map(({title,name,id}) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title || name}</Link>
          </li>
        ))}
      </ul>
     </>
    )
};