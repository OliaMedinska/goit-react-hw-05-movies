import {searchMovies} from 'api';
import { useState, useEffect } from 'react';
import { Form, Button, Input} from './MoviesPage.styled';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage () {
    const [movieItems, setMovieItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get("name");

useEffect(() => {
    async function getMovies() {
        if (!movieName) {
        return;
        }

        try {
        const searchedMovies = await searchMovies(movieName);
        setIsLoading(true);
        setMovieItems(prevItems => [...prevItems, ...searchedMovies]);
        } catch (error) {
        setError(true);
        } finally {
        setIsLoading(false);
        }
    }

    getMovies();
    }, [movieName]);


const onSubmitItems = e => {
    e.preventDefault();

    setMovieItems([]);
    setSearchParams({name: e.target.search.value.trim()});
};

    return (
        <>
        <Form onSubmit={onSubmitItems}>
            <Input
             type="text"
             autoComplete="off"
             autoFocus
             placeholder="Search movies"
             name="search"
            />
            

            <Button type="submit">
                search
            </Button>
        </Form>
      {movieItems.length > 0 && <MoviesList items = {movieItems}/>}
      {isLoading && <Loader></Loader>}
      {error && <p>Something wrong...</p>}
        </>
    )
};

