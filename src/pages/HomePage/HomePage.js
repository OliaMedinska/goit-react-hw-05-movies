import { fetchPopularMovies } from "api";
import { useState, useEffect } from "react";
import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";

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
    } finally {
      setIsLoading(false);
    }
  }

  updatedMovies();
}, [])


    return (
     <>
    {items.length > 0 && <h1>Trending today</h1>}
    {items.length > 0 && <MoviesList items = {items}/>}
      {isLoading && <Loader></Loader>}
      {error && <p>Something wrong...</p>}
     </>
    )
};