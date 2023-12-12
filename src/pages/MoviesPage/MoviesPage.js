import {searchMovies} from 'api';
import { useState, useEffect } from 'react';
import { Form, Button, Input, ItemLink, ItemsList } from './MoviesPage.styled';

export default function MoviesPage () {
    const [movieItems, setMovieItems] = useState([]);
    const [movieName, setMovieName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
    async function getMovies() {
        if (movieName === '') {
        return;
        }

        try {
        const searchedMovies = await searchMovies(movieName);
        setIsLoading(true);
        setMovieItems(prevItems => [...prevItems, ...searchedMovies]);
        } catch (error) {
        console.log('Something wrong...');
        } finally {
        setIsLoading(false);
        }
    }

    getMovies();
    }, [movieName]);


const onSubmitItems = e => {
    e.preventDefault();

    setMovieItems([]);
    setMovieName(e.target.search.value.trim());
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

        <ItemsList>
        {movieItems.map(({title,name,id}) => (
          <li key={id}>
            <ItemLink to={`/movies/${id}`}>{title || name}</ItemLink>
          </li>
        ))}
      </ItemsList>
        </>
    )
};

